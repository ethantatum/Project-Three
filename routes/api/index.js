const router = require("express").Router();
const userRoutes = require("./user");
const studentRoutes = require("./student");

// User, Student routes
router.use("/user", userRoutes);
router.use("/students", studentRoutes);

module.exports = router;

