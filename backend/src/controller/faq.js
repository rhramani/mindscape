const { Faq } = require("../models");

exports.createFaq = async (req, res) => {
  try {
    const faq = await Faq.create(req.body);
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find().sort({ sort_order: 1 });
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getFaqById = async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: "Faq not found" });
    res.status(200).json(faq);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateFaq = async (req, res) => {
  try {
    const faq = await Faq.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(faq);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteFaq = async (req, res) => {
  try {
    await Faq.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Faq deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
