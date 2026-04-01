const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  type: { type: String, required: true }, // enum: project, blog
  description: { type: String },
  image: { type: String },
  is_active: { type: Boolean, default: true },
  sort_order: { type: Number, default: 0 },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

categorySchema.index({ slug: 1, type: 1 }, { unique: true });

categorySchema.virtual('id').get(function() { return this._id.toHexString(); });
categorySchema.set('toJSON', { virtuals: true });
categorySchema.set('toObject', { virtuals: true });

module.exports = mongoose.model("Category", categorySchema);
