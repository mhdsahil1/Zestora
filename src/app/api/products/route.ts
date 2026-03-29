import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { z } from 'zod';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    // Parse query parameters
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort');

    // Build Mongoose query
    let query: any = {};

    if (category && category !== 'All') {
      query.category = category;
    }

    if (featured === 'true') {
      query.featured = true;
    }

    if (search && search.trim().length >= 2) {
      const q = search.trim();
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { category: { $regex: q, $options: 'i' } },
        { origin: { $regex: q, $options: 'i' } },
        { tags: { $in: [new RegExp(q, 'i')] } }
      ];
    }

    let productsQuery = Product.find(query);

    // Apply sorting
    if (sort) {
      switch (sort) {
        case 'price-asc':
          productsQuery = productsQuery.sort({ price: 1 });
          break;
        case 'price-desc':
          productsQuery = productsQuery.sort({ price: -1 });
          break;
        case 'rating':
          productsQuery = productsQuery.sort({ rating: -1 });
          break;
        case 'newest':
          productsQuery = productsQuery.sort({ isNew: -1, createdAt: -1 });
          break;
        case 'featured':
          productsQuery = productsQuery.sort({ featured: -1 });
          break;
        default:
          break;
      }
    }

    const products = await productsQuery.lean();

    // Map _id to id if necessary, or just return as is since Schema has id field
    const formattedProducts = products.map((p: any) => ({
      ...p,
      _id: p._id.toString(),
    }));

    return NextResponse.json({ success: true, data: formattedProducts }, { status: 200 });

  } catch (error: any) {
    console.error('[API Products GET Error]:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch products', error: error.message },
      { status: 500 }
    );
  }
}

// --- POST: Create a new product (admin only) ---

const productCreateSchema = z.object({
  name: z.string().min(2, 'Name is required').max(200),
  slug: z.string().min(2).max(200),
  id: z.string().min(1).max(200),
  category: z.string().min(1, 'Category is required').max(100),
  subCategory: z.string().max(100).optional(),
  price: z.number().positive('Price must be positive'),
  originalPrice: z.number().positive().optional(),
  weight: z.string().min(1, 'Weight is required').max(50),
  image: z.string().url('Image must be a valid URL'),
  images: z.array(z.string().url()).optional(),
  description: z.string().min(10, 'Description is too short').max(5000),
  shortDescription: z.string().min(5, 'Short description is too short').max(500),
  origin: z.string().min(1, 'Origin is required').max(200),
  healthBenefits: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().optional().default(false),
  isNew: z.boolean().optional().default(false),
  isBestseller: z.boolean().optional().default(false),
  inStock: z.boolean().optional().default(true),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || (session.user as any).role !== 'admin') {
      return NextResponse.json(
        { success: false, message: 'Forbidden. Admin access required.' },
        { status: 403 }
      );
    }

    const body = await req.json();
    const validated = productCreateSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { success: false, message: 'Validation failed.', errors: validated.error.issues },
        { status: 400 }
      );
    }

    await dbConnect();

    // Check for duplicate slug or id
    const existing = await Product.findOne({
      $or: [{ slug: validated.data.slug }, { id: validated.data.id }],
    });

    if (existing) {
      return NextResponse.json(
        { success: false, message: 'A product with this slug or ID already exists.' },
        { status: 409 }
      );
    }

    const product = await Product.create(validated.data);

    return NextResponse.json(
      { success: true, data: { ...product.toObject(), _id: product._id.toString() } },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('[API Products POST Error]:', error);

    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, message: 'Duplicate product. A product with this slug or ID already exists.' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Failed to create product', error: error.message },
      { status: 500 }
    );
  }
}
