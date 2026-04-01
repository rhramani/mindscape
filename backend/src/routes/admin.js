const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const { 
  createAdmin, 
  loginAdmin, 
  getAllAdmins, 
  getAdminById, 
  updateAdmin, 
  deleteAdmin 
} = require("../controller/admin");

router.post("/register", createAdmin);
router.post("/login", loginAdmin);
router.get("/all", getAllAdmins);
router.get("/getOne/:id", getAdminById);
router.put("/update/:id", updateAdmin);
router.delete("/delete/:id", deleteAdmin);

module.exports = router;
