const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createAnnouncementBar,
  getAllAnnouncementBars,
  getAnnouncementBarById,
  updateAnnouncementBar,
  deleteAnnouncementBar
} = require("../controller/announcementBar");

router.post("/create", verifyToken, createAnnouncementBar);
router.get("/getAll", getAllAnnouncementBars);
router.get("/getOne/:id", getAnnouncementBarById);
router.put("/update/:id", verifyToken, updateAnnouncementBar);
router.delete("/delete/:id", verifyToken, deleteAnnouncementBar);

module.exports = router;
