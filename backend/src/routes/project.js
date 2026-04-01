const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
} = require("../controller/project");

router.post("/create", verifyToken, createProject);
router.get("/getAll", getAllProjects);
router.get("/getOne/:id", getProjectById);
router.put("/update/:id", verifyToken, updateProject);
router.delete("/delete/:id", verifyToken, deleteProject);

module.exports = router;
