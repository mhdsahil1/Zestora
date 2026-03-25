import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
  productId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  stock: { 
    type: Number, 
    required: true, 
    min: 0 
  }
}, { timestamps: true });

export default mongoose.models.Inventory || mongoose.model('Inventory', InventorySchema);
