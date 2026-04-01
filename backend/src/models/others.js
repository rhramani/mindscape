const mongoose = require("mongoose");

const announcementBarSchema = new mongoose.Schema({
  message: { type: String, required: true },
  link: { type: String },
  link_text: { type: String },
  bg_color: { type: String, default: "#1A3C5E" },
  text_color: { type: String, default: "#FFFFFF" },
  is_active: { type: Boolean, default: true },
  start_date: { type: Date },
  end_date: { type: Date },
}, { timestamps: { createdAt: "created_at" } });

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  thumbnail: { type: String },
  type: { type: String, default: "youtube" }, // enum: youtube, upload
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  description: { type: String },
  is_featured: { type: Boolean, default: false },
  is_active: { type: Boolean, default: true },
  sort_order: { type: Number, default: 0 },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: { type: String, default: "general" }, // enum: general, services, pricing, process
  sort_order: { type: Number, default: 0 },
  is_active: { type: Boolean, default: true },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

const termsConditionSchema = new mongoose.Schema({
  title: { type: String, default: "Terms & Conditions" },
  content: { type: String, required: true },
  version: { type: String, default: "1.0" },
  last_updated: { type: Date, default: Date.now },
  is_active: { type: Boolean, default: true },
}, { timestamps: { createdAt: "created_at" } });

announcementBarSchema.virtual('id').get(function() { return this._id.toHexString(); });
videoSchema.virtual('id').get(function() { return this._id.toHexString(); });
faqSchema.virtual('id').get(function() { return this._id.toHexString(); });

announcementBarSchema.set('toJSON', { virtuals: true });
videoSchema.set('toJSON', { virtuals: true });
faqSchema.set('toJSON', { virtuals: true });

module.exports = {
  AnnouncementBar: mongoose.model("AnnouncementBar", announcementBarSchema),
  Video: mongoose.model("Video", videoSchema),
  Faq: mongoose.model("Faq", faqSchema),
  TermsCondition: mongoose.model("TermsCondition", termsConditionSchema),
};
