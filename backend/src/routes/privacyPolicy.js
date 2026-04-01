const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createPrivacyPolicy,
  getPrivacyPolicy,
  updatePrivacyPolicy,
  deletePrivacyPolicy
} = require("../controller/privacyPolicy");

router.post("/create", verifyToken, createPrivacyPolicy);
router.get("/get", getPrivacyPolicy);
router.put("/update/:id", verifyToken, updatePrivacyPolicy);
router.delete("/delete/:id", verifyToken, deletePrivacyPolicy);

module.exports = router;
