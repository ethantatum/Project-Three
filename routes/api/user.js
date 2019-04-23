const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/students"
router.route("/:id")
    .get(userController.findAll);

router.route("/classes/:id")
    .get(userController.findById);

module.exports = router;