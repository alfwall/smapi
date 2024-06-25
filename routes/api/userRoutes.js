const router = require("express").Router();
const {
    getUsers,
    getSpecificUser,
    createNewUser
} = require("../../controllers/userController");

// /api/users 
router.route("/").get(getUsers).post(createNewUser);
router.route("/:userID").get(getSpecificUser);

module.exports = router;