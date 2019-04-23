const router = require("express").Router();
const authRoutes = require("./auth");
const studentRoutes = require("./student");
const classRoutes = require("./classes");
const userRoutes = require("./user");

// User, Student routes
router.use("/auth", authRoutes);
router.use("/student", studentRoutes);
router.use("/class", classRoutes);
router.use("/user", userRoutes);

module.exports = router;

