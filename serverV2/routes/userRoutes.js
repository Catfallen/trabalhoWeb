
const express = require("express")

const router = express.Router();
const UserController = require("../controllers/userController.js")


router.get("/users/:id",UserController.getUserById);
router.get("/users/cell/:cell",UserController.getUserbyCell);
router.post("/users",UserController.createUser)

module.exports = router