const router = require("express").Router();
const studentController = require("../../controllers/studentController");

// Matches with "/api/students"
router.route("/")
    .get(studentController.findAll);

router.route("/:id")
    .get(studentController.findById)
    .put(studentController.update)
    .delete(studentController.remove);

module.exports = router;