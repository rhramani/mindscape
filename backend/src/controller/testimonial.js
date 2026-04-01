const { Testimonial } = require("../models");

exports.createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().populate('project_id').sort({ sort_order: 1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id).populate('project_id');
    if (!testimonial) return res.status(404).json({ message: "Testimonial not found" });
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
