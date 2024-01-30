const express = require("express");
const router = express.Router();
const handlerInscription = require("../Controller/inscriptionHandler.js");
const authenticateToken = require("../JWT/jwtMiddleware");
const handlerLogin = require("../Controller/loginHandler");
const HandlerUser = require("../Controller/UserHandler");

router.post("/inscription", handlerInscription);
router.get("/get-user", authenticateToken, HandlerUser.GetUserByToken);
router.post("/login", handlerLogin);
router.get("/AllUser", HandlerUser.GetAllUser);

module.exports = router;
