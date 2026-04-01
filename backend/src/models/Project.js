const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  short_desc: { type: String },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  location: { type: String },
  area_sqft: { type: String },
  client_name: { type: String },
  completion_date: { type: Date },
  images: { type: [String] },
  before_images: { type: [String] },
  after_images: { type: [String] },
  thumbnail: { type: String },
  is_featured: { type: Boolean, default: false },
  is_active: { type: Boolean, default: true },
  meta_title: { type: String },
  meta_description: { type: String },
  sort_order: { type: Number, default: 0 },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

projectSchema.virtual('id').get(function() { return this._id.toHexString(); });
projectSchema.set('toJSON', { virtuals: true });
projectSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model("Project", projectSchema);
