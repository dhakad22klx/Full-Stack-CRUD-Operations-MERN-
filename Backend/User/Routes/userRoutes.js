const express = require("express");
const userController = require("../Controller/userController");

const router = express.Router();

router.post("/create", userController.createUser);
router.put("/update/:_id", userController.updateUser);
router.delete("/delete/:_id", userController.deleteUser);
router.get("/list", userController.listUsers);

module.exports = router;
