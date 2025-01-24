const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/auth.middleware");
const ResultController = require("../controllers/result.controller");

router.post("/", AuthMiddleware.authenticateUser, ResultController.create);
// router.get("/", AuthMiddleware.authenticateUser, ResultController.getReports);
// router.get(
//   "/getReport",
//   AuthMiddleware.authenticateUser,
//   ResultController.getReport
// );
// router.delete(
//   "/:id",
//   AuthMiddleware.authenticateUser,
//   ResultController.deleteReport
// );

module.exports = router;
