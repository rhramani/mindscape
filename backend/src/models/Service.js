const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  icon: { type: String },
  short_description: { type: String },
  long_description: { type: String },
  banner_image: { type: String },
  is_active: { type: Boolean, default: true },
  sort_order: { type: Number, default: 0 },
  meta_title: { type: String },
  meta_description: { type: String },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

serviceSchema.virtual('id').get(function() { return this._id.toHexString(); });
serviceSchema.set('toJSON', { virtuals: true });
serviceSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model("Service", serviceSchema);
