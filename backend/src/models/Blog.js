const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  excerpt: { type: String },
  featured_image: { type: String },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  author_id: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
  tags: { type: [String] },
  status: { type: String, default: "draft" }, // enum: draft, published, archived
  published_at: { type: Date },
  read_time: { type: Number },
  meta_title: { type: String },
  meta_description: { type: String },
  og_image: { type: String },
  views: { type: Number, default: 0 },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

blogSchema.virtual('id').get(function() { return this._id.toHexString(); });
blogSchema.set('toJSON', { virtuals: true });
blogSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model("Blog", blogSchema);
