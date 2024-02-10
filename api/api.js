const express = require("express");
const router = express.Router();
const handlerInscription = require("../Controller/RegisterController/inscriptionHandler.js");
const authenticateToken = require("../JWT/jwtMiddleware");
const handlerLogin = require("../Controller/AuthController/loginHandler");
const HandlerUser = require("../Controller/UserController/UserHandler");
const mobileMoneyController = require("../Controller/mobileMoney.controller");

//      USER

router.post("/inscription", handlerInscription);
router.get("/get-user", authenticateToken, HandlerUser.GetUserByToken);
router.post("/login", handlerLogin);
router.get("/AllUser", HandlerUser.GetAllUser);
router.put("/updateUser/:id", HandlerUser.updateUser)

//      MOBILEMONEY

router.post("/mobileMoney/create", mobileMoneyController.createMobileMoney)
router.get("/mobileMoney/findAll", mobileMoneyController.GetAllMobileMoney)

module.exports = router;
