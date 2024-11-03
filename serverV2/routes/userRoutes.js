const express = require("express")

const router = express.Router();
const UserController = require("../controllers/userController.js");



router.get("/users/:id",UserController.getUserById);
router.get("/users/cell/:cell",UserController.getUserbyCell);
router.get("/horarios",UserController.getHorarios);
router.get("/servicos", UserController.getServices);

router.post("/users",UserController.createUser);
router.post("/gerarHorarios",UserController.gerarHorarios)

router.put("/horarios",UserController.updateHorario);

module.exports = router;