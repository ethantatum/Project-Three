const router = require("express").Router();
const userRoutes = require("./user");
const studentRoutes = require("./student");
const classRoutes = require("./classes");

// User, Student routes
router.use("/user", userRoutes);
router.use("/students", studentRoutes);
router.use("/class", classRoutes);

module.exports = router;

