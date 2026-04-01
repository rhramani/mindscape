const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createBanner,
  getAllBanners,
  getBannerById,
  updateBanner,
  deleteBanner
} = require("../controller/banner");

router.post("/create", verifyToken, createBanner);
router.get("/getAll", getAllBanners);
router.get("/getOne/:id", getBannerById);
router.put("/update/:id", verifyToken, updateBanner);
router.delete("/delete/:id", verifyToken, deleteBanner);

module.exports = router;
