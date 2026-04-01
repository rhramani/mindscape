const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial
} = require("../controller/testimonial");

router.post("/create", verifyToken, createTestimonial);
router.get("/getAll", getAllTestimonials);
router.get("/getOne/:id", getTestimonialById);
router.put("/update/:id", verifyToken, updateTestimonial);
router.delete("/delete/:id", verifyToken, deleteTestimonial);

module.exports = router;
