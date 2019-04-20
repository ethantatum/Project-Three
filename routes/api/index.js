const router = require("express").Router();
const userRoutes = require("./user");
const studentRoutes = require("./student");

// User, Student routes
router.use("/user", userRoutes);
router.use("/student", studentRoutes);

module.exports = router;

