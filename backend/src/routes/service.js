const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService
} = require("../controller/service");

router.post("/create", verifyToken, createService);
router.get("/getAll", getAllServices);
router.get("/getOne/:id", getServiceById);
router.put("/update/:id", verifyToken, updateService);
router.delete("/delete/:id", verifyToken, deleteService);

module.exports = router;
