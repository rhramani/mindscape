const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createSeoSetting,
  getSeoSettingByPage,
  updateSeoSetting,
  deleteSeoSetting
} = require("../controller/seoSetting");

router.post("/create", verifyToken, createSeoSetting);
router.get("/getOne/:page", getSeoSettingByPage);
router.put("/update/:id", verifyToken, updateSeoSetting);
router.delete("/delete/:id", verifyToken, deleteSeoSetting);

module.exports = router;
