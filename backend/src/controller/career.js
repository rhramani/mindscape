const { Career } = require("../models");

exports.createCareer = async (req, res) => {
  try {
    const career = await Career.create(req.body);
    res.status(201).json(career);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllCareers = async (req, res) => {
  try {
    const careers = await Career.find().sort({ created_at: -1 });
    res.status(200).json(careers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getCareerById = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (!career) return res.status(404).json({ message: "Career not found" });
    res.status(200).json(career);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateCareer = async (req, res) => {
  try {
    const career = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(career);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteCareer = async (req, res) => {
  try {
    await Career.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Career deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
