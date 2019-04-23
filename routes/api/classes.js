const router = require("express").Router();
const classController = require("../../controllers/classesController");

// Matches with "/api/class"
router.route("/")
  .get(classController.findAll)
  .post(classController.create);

  module.exports = router;
