const router = require("express").Router();
const studentRoutes = require("./student");

// Book routes
router.use("/student", studentRoutes);

module.exports = router;