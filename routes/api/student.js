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
    .put(studentController.addBehavior)
    .get(studentController.findById);
    
router.route("/comments/:id")
    .get(studentController.findById)
    .put(studentController.addComment);

router.route("/report/:id")
    .put(studentController.addReport);

module.exports = router;