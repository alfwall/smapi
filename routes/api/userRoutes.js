const router = require("express").Router();
const {
    getUsers,
    getSpecificUser
} = require("../../controllers/userController");

// /api/users 
router.route("/").get(getUsers) //.post(createUser);
router.route("/:userID").get(getSpecificUser);

module.exports = router;