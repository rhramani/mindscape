const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createCareer,
  getAllCareers,
  getCareerById,
  updateCareer,
  deleteCareer
} = require("../controller/career");

router.post("/create", verifyToken, createCareer);
router.get("/getAll", getAllCareers);
router.get("/getOne/:id", getCareerById);
router.put("/update/:id", verifyToken, updateCareer);
router.delete("/delete/:id", verifyToken, deleteCareer);

module.exports = router;
