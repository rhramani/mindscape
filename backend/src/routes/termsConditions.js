const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createTermsCondition,
  getTermsCondition,
  updateTermsCondition,
  deleteTermsCondition
} = require("../controller/termsConditions");

router.post("/create", verifyToken, createTermsCondition);
router.get("/get", getTermsCondition);
router.put("/update/:id", verifyToken, updateTermsCondition);
router.delete("/delete/:id", verifyToken, deleteTermsCondition);

module.exports = router;
