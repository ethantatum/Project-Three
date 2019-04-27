const router = require("express").Router();
const studentController = require("../../controllers/studentController");

// Matches with "/api/student"
router.route("/")
    .get(studentController.findAll);

router.route("/:id")
    .post(studentController.create)
    .get(studentController.findById)
    .put(studentController.update);

router.route("/behavior/:id")
    .put(studentController.addBehavior);
    
router.route("/comments/:id")
    .get(studentController.findById)
    .put(studentController.addComment);

module.exports = router;