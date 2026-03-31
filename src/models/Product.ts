import mongoose from 'mongoose';

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

    // Sensory & Educational
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

    // Navigation Filters
    cuisine: [String],
    dietary: [String],

    subscribeAndSaveDiscount: Number,
  },
  { timestamps: true, suppressReservedKeysWarning: true }
);

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
