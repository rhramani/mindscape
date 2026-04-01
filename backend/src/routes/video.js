const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
  deleteVideo
} = require("../controller/video");

router.post("/create", verifyToken, createVideo);
router.get("/getAll", getAllVideos);
router.get("/getOne/:id", getVideoById);
router.put("/update/:id", verifyToken, updateVideo);
router.delete("/delete/:id", verifyToken, deleteVideo);

module.exports = router;
