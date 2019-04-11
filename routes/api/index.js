const router = require("express").Router();
const studentRoutes = require("./student");

// Student routes
router.use("/student", studentRoutes);

module.exports = router;