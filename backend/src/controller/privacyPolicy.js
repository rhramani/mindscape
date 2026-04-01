const { PrivacyPolicy } = require("../models");

exports.createPrivacyPolicy = async (req, res) => {
  try {
    const privacyPolicy = await PrivacyPolicy.create(req.body);
    res.status(201).json(privacyPolicy);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getPrivacyPolicy = async (req, res) => {
  try {
    const privacyPolicy = await PrivacyPolicy.findOne({ is_active: true }).sort({ created_at: -1 });
    res.status(200).json(privacyPolicy);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updatePrivacyPolicy = async (req, res) => {
  try {
    const privacyPolicy = await PrivacyPolicy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(privacyPolicy);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deletePrivacyPolicy = async (req, res) => {
  try {
    await PrivacyPolicy.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Privacy policy deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
