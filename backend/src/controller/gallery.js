const { Gallery } = require("../models");

exports.createGallery = async (req, res) => {
  try {
    const gallery = await Gallery.create(req.body);
    res.status(201).json(gallery);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllGalleryImages = async (req, res) => {
  try {
    const gallery = await Gallery.find().populate('category_id project_id').sort({ sort_order: 1 });
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getGalleryById = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id).populate('category_id project_id');
    if (!gallery) return res.status(404).json({ message: "Gallery image not found" });
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteGallery = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Gallery image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
