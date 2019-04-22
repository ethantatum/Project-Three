const router = require("express").Router();
const studentController = require("../../controllers/studentController");

// Matches with "/api/students"
router.route("/students")
    .get(studentController.findAll);

router.route("/students/:id")
    .get(studentController.findById)
    .put(studentController.update);

module.exports = router;