
const express = require("express")

const router = express.Router();
const UserController = require("../controllers/userController.js")


router.get("/users/id/:id",UserController.getUserById);
router.get("/users/cell/:cell",UserController.getUserbyCell);

module.exports = router