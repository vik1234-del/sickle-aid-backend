const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/authController");

// Sign-up route
router.post("/signup", signup);

// Sign-in route
router.post("/signin", signin);

//google sign-in
router.post("/google/signin", google);

module.exports = router;
