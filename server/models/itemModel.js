const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  _id: String, // Custom string IDs like "aaaab"
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true, min: 0 },
  image: [String],
  category: String,
  subCategory: String,
  sizes: [String],
  date: { type: Date, default: Date.now }, // Safe change; new data gets real Date
  bestseller: Boolean
}, {
  timestamps: true // Adds createdAt and updatedAt
});

// Performance indexes
ItemSchema.index({ category: 1 });
ItemSchema.index({ subCategory: 1 });
ItemSchema.index({ price: 1 });
ItemSchema.index({ name: "text", description: "text" }); // for search

const Item = mongoose.model('Item', ItemSchema);
module.exports = {Item};
