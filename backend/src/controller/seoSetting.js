const { SeoSetting } = require("../models");

exports.createSeoSetting = async (req, res) => {
  try {
    const seoSetting = await SeoSetting.create(req.body);
    res.status(201).json(seoSetting);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getSeoSettingByPage = async (req, res) => {
  try {
    const seoSetting = await SeoSetting.findOne({ page: req.params.page });
    if (!seoSetting) return res.status(404).json({ message: "SEO setting not found" });
    res.status(200).json(seoSetting);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateSeoSetting = async (req, res) => {
  try {
    const seoSetting = await SeoSetting.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(seoSetting);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteSeoSetting = async (req, res) => {
  try {
    await SeoSetting.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "SEO setting deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
