const { Admin } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = await Admin.create({ name, email, password: hashedPassword, role });

    res.status(201).json({ 
      message: "Admin created successfully", 
      admin: { id: newAdmin.id, name, email, role } 
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin.id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
    admin.last_login = new Date();
    await admin.save();

    res.status(200).json({ token, admin: { id: admin.id, name: admin.name, email: admin.email, role: admin.role } });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id).select("-password");
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateAdmin = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.body.password) {
      updateData.password = await bcrypt.hash(req.body.password, 10);
    }
    const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, updateData, { new: true }).select("-password");
    res.status(200).json({ message: "Admin updated successfully", admin: updatedAdmin });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
