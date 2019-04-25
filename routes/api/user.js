const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/:id")
    .get(userController.userData)
    .post(userController.updateUser);

router.route("/classes/:id")
    .get(userController.populateClasses);

module.exports = router;