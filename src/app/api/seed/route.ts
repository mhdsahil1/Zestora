import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';
import Inventory from '@/models/Inventory';
import { products as staticProducts } from '@/data/products';

export async function GET() {
  try {
    await dbConnect();

    // 1. Clear existing products (if any incomplete seed happened)
    await Product.deleteMany({});
    
    // 2. Insert all products from static file
    const result = await Product.insertMany(staticProducts);
    
    // 3. Initialize inventory for all inserted products
    const inventoryItems = staticProducts.map(p => ({
      productId: p.id,
      stock: 100 // Default stock for new items
    }));
    await Inventory.deleteMany({});
    await Inventory.insertMany(inventoryItems);

    return NextResponse.json({ 
      success: true, 
      message: `Successfully seeded ${result.length} products and initialized their inventory.`,
      targetDatabase: 'zestora',
    }, { status: 200 });

  } catch (error: any) {
    console.error('[Seed Error]:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to seed database' },
      { status: 500 }
    );
  }
}
