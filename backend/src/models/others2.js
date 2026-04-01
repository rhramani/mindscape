const mongoose = require("mongoose");

const privacyPolicySchema = new mongoose.Schema({
  title: { type: String, default: "Privacy Policy" },
  content: { type: String, required: true },
  version: { type: String, default: "1.0" },
  last_updated: { type: Date, default: Date.now },
  is_active: { type: Boolean, default: true },
}, { timestamps: { createdAt: "created_at" } });

const testimonialSchema = new mongoose.Schema({
  client_name: { type: String, required: true },
  company: { type: String },
  rating: { type: Number, default: 5 },
  review: { type: String, required: true },
  image: { type: String },
  project_id: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  designation: { type: String },
  is_active: { type: Boolean, default: true },
  sort_order: { type: Number, default: 0 },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  subject: { type: String },
  message: { type: String, required: true },
  service_interest: { type: String },
  status: { type: String, default: "new" }, // enum: new, read, replied, archived
  admin_notes: { type: String },
  ip_address: { type: String },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

const careerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String },
  location: { type: String },
  type: { type: String, default: "full-time" }, // enum: full-time, part-time, internship, freelance
  experience: { type: String },
  description: { type: String, required: true },
  requirements: { type: String },
  last_date: { type: Date },
  is_active: { type: Boolean, default: true },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

const gallerySchema = new mongoose.Schema({
  image_url: { type: String, required: true },
  alt_text: { type: String },
  title: { type: String },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  project_id: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  is_active: { type: Boolean, default: true },
  sort_order: { type: Number, default: 0 },
}, { timestamps: { createdAt: "created_at" } });

const seoSettingSchema = new mongoose.Schema({
  page: { type: String, required: true, unique: true },
  meta_title: { type: String },
  meta_description: { type: String },
  og_title: { type: String },
  og_description: { type: String },
  og_image: { type: String },
  schema_json: { type: mongoose.Schema.Types.Mixed },
  canonical_url: { type: String },
  robots: { type: String, default: "index,follow" },
}, { timestamps: { updatedAt: "updated_at" } });

privacyPolicySchema.virtual('id').get(function() { return this._id.toHexString(); });
testimonialSchema.virtual('id').get(function() { return this._id.toHexString(); });
contactSchema.virtual('id').get(function() { return this._id.toHexString(); });
careerSchema.virtual('id').get(function() { return this._id.toHexString(); });
gallerySchema.virtual('id').get(function() { return this._id.toHexString(); });
seoSettingSchema.virtual('id').get(function() { return this._id.toHexString(); });

module.exports = {
  PrivacyPolicy: mongoose.model("PrivacyPolicy", privacyPolicySchema),
  Testimonial: mongoose.model("Testimonial", testimonialSchema),
  Contact: mongoose.model("Contact", contactSchema),
  Career: mongoose.model("Career", careerSchema),
  Gallery: mongoose.model("Gallery", gallerySchema),
  SeoSetting: mongoose.model("SeoSetting", seoSettingSchema),
};
