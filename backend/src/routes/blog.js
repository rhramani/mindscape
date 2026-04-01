const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require("../controller/blog");

router.post("/create", verifyToken, createBlog);
router.get("/getAll", getAllBlogs);
router.get("/getOne/:id", getBlogById);
router.put("/update/:id", verifyToken, updateBlog);
router.delete("/delete/:id", verifyToken, deleteBlog);

module.exports = router;
