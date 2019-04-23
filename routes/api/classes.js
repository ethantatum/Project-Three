const router = require("express").Router();
const classController = require("../../controllers/classesController");

// Matches with "/api/class"
router.route("/")
  .get(classController.findAll);

  module.exports = router;
