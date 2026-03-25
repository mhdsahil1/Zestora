/**
 * Database Seed Script
 * Migrates products from src/data/products.ts into MongoDB.
 *
 * Usage: npx tsx scripts/seedDatabase.ts
 */

import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { products } from '../src/data/products';

// Read MONGODB_URI from .env.local
const envPath = path.resolve(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const match = envContent.match(/MONGODB_URI\s*=\s*(.+)/);
if (!match) {
  console.error('❌ MONGODB_URI not found in .env.local');
  process.exit(1);
}
const MONGODB_URI = match[1].trim().replace(/^["']|["']$/g, '');

// Use the same schema inline to avoid path alias issues in scripts
const ProductSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    subCategory: String,
    price: { type: Number, required: true },
    originalPrice: Number,
    weight: { type: String, required: true },
    image: { type: String, required: true },
    images: [String],
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    origin: { type: String, required: true },
    healthBenefits: [String],
    tags: [String],
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    inStock: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
    isNew: { type: Boolean, default: false },
    isBestseller: { type: Boolean, default: false },
    flavorProfile: {
      aroma: Number,
      freshness: Number,
      spiciness: Number,
      notes: [String],
    },
    recipe: {
      name: String,
      ingredients: [{ name: String, quantity: String }],
    },
    storageTips: String,
    traceability: {
      batchNo: String,
      harvestDate: String,
      farmName: String,
    },
    grindingVideoUrl: String,
    cuisine: [String],
    dietary: [String],
    subscribeAndSaveDiscount: Number,
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

async function seed() {
  console.log('🔌 Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Connected to MongoDB (zestora database)');

  // Clear existing products
  const deleteResult = await Product.deleteMany({});
  console.log(`🗑️  Cleared ${deleteResult.deletedCount} existing products`);

  // Insert all products from the static file
  const result = await Product.insertMany(products);
  console.log(`✅ Successfully inserted ${result.length} products into MongoDB!`);

  // Show a quick summary
  const count = await Product.countDocuments();
  console.log(`📊 Total products in database: ${count}`);

  await mongoose.disconnect();
  console.log('🔌 Disconnected from MongoDB');
  console.log('\n🎉 Seed complete! Check your Atlas dashboard to verify.');
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
