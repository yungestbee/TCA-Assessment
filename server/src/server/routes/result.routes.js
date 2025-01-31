const express = require("express");
const router = express.Router();
// const AuthMiddleware = require("../middlewares/auth.middleware");
const ResultController = require("../controllers/result.controller");

router.post("/", ResultController.create);


module.exports = router;
