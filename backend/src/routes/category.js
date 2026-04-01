const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} = require("../controller/category");

router.post("/create", verifyToken, createCategory);
router.get("/getAll", getAllCategories);
router.get("/getOne/:id", getCategoryById);
router.put("/update/:id", verifyToken, updateCategory);
router.delete("/delete/:id", verifyToken, deleteCategory);

module.exports = router;
