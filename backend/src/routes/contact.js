const router = require("express").Router();
const { verifyToken } = require("../../middleware/jwt");
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact
} = require("../controller/contact");

router.post("/create", createContact); // Public
router.get("/getAll", verifyToken, getAllContacts);
router.get("/getOne/:id", verifyToken, getContactById);
router.put("/update/:id", verifyToken, updateContact);
router.delete("/delete/:id", verifyToken, deleteContact);

module.exports = router;
