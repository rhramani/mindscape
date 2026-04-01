const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  image_url: { type: String, required: true },
  page: { type: String, required: true }, // enum: home, services, projects, about, contact, gallery
  cta_text: { type: String },
  cta_link: { type: String },
  is_active: { type: Boolean, default: true },
  sort_order: { type: Number, default: 0 },
  start_date: { type: Date },
  end_date: { type: Date },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

bannerSchema.virtual('id').get(function() { return this._id.toHexString(); });
bannerSchema.set('toJSON', { virtuals: true });
bannerSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model("Banner", bannerSchema);
