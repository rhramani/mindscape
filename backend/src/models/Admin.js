const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "editor" }, // enum: super_admin, editor
  profile_image: { type: String },
  is_active: { type: Boolean, default: true },
  last_login: { type: Date },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

// Virtual 'id' for JSON output compatibility
adminSchema.virtual('id').get(function() { return this._id.toHexString(); });
adminSchema.set('toJSON', { virtuals: true });
adminSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model("Admin", adminSchema);
