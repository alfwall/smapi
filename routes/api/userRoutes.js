const router = require("express").Router();
const {
    getUsers,
    getSpecificUser,
    createNewUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require("../../controllers/userController");

// /api/users 
router.route("/")
    .get(getUsers)
    .post(createNewUser)
    .put(updateUser);
router.route("/:userID")
    .get(getSpecificUser)
    .delete(deleteUser);
router.route("/:userID/friends/:friendID")
    .post(addFriend)
    .delete(removeFriend);
module.exports = router;