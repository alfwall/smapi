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
    .post(createNewUser);
router.route("/:userID")
    .get(getSpecificUser)
    .put(updateUser)
    .delete(deleteUser);
router.route("/:userID/friends/:friendID")
    .post(addFriend)
    .delete(removeFriend);
module.exports = router;