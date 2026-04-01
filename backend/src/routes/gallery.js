const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createGallery,
  getAllGalleryImages,
  getGalleryById,
  updateGallery,
  deleteGallery
} = require("../controller/gallery");

router.post("/create", verifyToken, createGallery);
router.get("/getAll", getAllGalleryImages);
router.get("/getOne/:id", getGalleryById);
router.put("/update/:id", verifyToken, updateGallery);
router.delete("/delete/:id", verifyToken, deleteGallery);

module.exports = router;
