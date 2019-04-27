const router = require("express").Router();
const studentController = require("../../controllers/studentController");

// Matches with "/api/students"
router.route("/")
    .get(studentController.findAll);

router.route("/:id")
    .get(studentController.findById)
    .put(studentController.update);

router.route("/behavior/:id")
    .put(studentController.addBehavior);

module.exports = router;