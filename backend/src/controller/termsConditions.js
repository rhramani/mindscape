const { TermsCondition } = require("../models");

exports.createTermsCondition = async (req, res) => {
  try {
    const termsCondition = await TermsCondition.create(req.body);
    res.status(201).json(termsCondition);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getTermsCondition = async (req, res) => {
  try {
    const termsCondition = await TermsCondition.findOne({ is_active: true }).sort({ created_at: -1 });
    res.status(200).json(termsCondition);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateTermsCondition = async (req, res) => {
  try {
    const termsCondition = await TermsCondition.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(termsCondition);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteTermsCondition = async (req, res) => {
  try {
    await TermsCondition.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Terms and conditions deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
