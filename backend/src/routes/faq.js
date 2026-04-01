const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createFaq,
  getAllFaqs,
  getFaqById,
  updateFaq,
  deleteFaq
} = require("../controller/faq");

router.post("/create", verifyToken, createFaq);
router.get("/getAll", getAllFaqs);
router.get("/getOne/:id", getFaqById);
router.put("/update/:id", verifyToken, updateFaq);
router.delete("/delete/:id", verifyToken, deleteFaq);

module.exports = router;
