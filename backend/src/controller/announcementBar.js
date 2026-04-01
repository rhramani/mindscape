const { AnnouncementBar } = require("../models");

exports.createAnnouncementBar = async (req, res) => {
  try {
    const announcementBar = await AnnouncementBar.create(req.body);
    res.status(201).json(announcementBar);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllAnnouncementBars = async (req, res) => {
  try {
    const announcementBars = await AnnouncementBar.find().sort({ created_at: -1 });
    res.status(200).json(announcementBars);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAnnouncementBarById = async (req, res) => {
  try {
    const announcementBar = await AnnouncementBar.findById(req.params.id);
    if (!announcementBar) return res.status(404).json({ message: "Announcement bar not found" });
    res.status(200).json(announcementBar);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateAnnouncementBar = async (req, res) => {
  try {
    const announcementBar = await AnnouncementBar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(announcementBar);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteAnnouncementBar = async (req, res) => {
  try {
    await AnnouncementBar.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Announcement bar deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
