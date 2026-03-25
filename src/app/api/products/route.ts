import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';
import { NextRequest } from 'next/server';

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
