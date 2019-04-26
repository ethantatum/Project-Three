const router = require("express").Router();
const classController = require("../../controllers/classesController");

// Matches with "/api/class"
router.route("/")
  .get(classController.findAll);
  

router.route("/:id")
  .post(classController.create);

module.exports = router;
