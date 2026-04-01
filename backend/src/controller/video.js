const { Video } = require("../models");

exports.createVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate('category_id').sort({ sort_order: 1 });
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate('category_id');
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
