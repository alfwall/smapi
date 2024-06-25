const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
    // GET "/"
    async getUsers(req, res) {
        try {
            const users = await User.find();
            if (!users) {
                res.status(500).json({ message: "Could not find ANY users!" })
            }
            res.status(200).json({ users });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // GET "/:userID"
    async getSpecificUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userID });
            if (!user) {
                return res.status(500).json({ message: "Could not find user with provided ID." })
            }
            res.status(200).json({ user });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // POST "/" WITH BODY
    async createNewUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json({ newUser });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // PUT "/:userID" WITH BODY
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userID },
                { username: req.body.username },
                { new: true });
            if (!user) {
                return res.status(500).json({ message: "Could not find user with provided ID." })
            }
            res.status(200).json({ user });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // DELETE "/:userID"
    async deleteUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userID });
            if (!user) {
                return res.status(500).json({ message: "No user found to delete" });
            }
            const thoughts = await Thought.deleteMany({
                _id: {$in: user.thoughts}
            })

            const userDeleted = await User.findOneAndDelete({_id: req.params.userID});

            res.status(200).json({message: "Successfully deleted user."})
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // POST "/:userID/friends/:friendID"
    async addFriend(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userID });
            const friend = await User.findOne({ _id: req.params.friendID });
            if (!user || !friend) {
                return res.status(500).json({ message: "One or both user ID's was not found." })
            }
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.params.userID },
                { $addToSet: { friends: req.params.friendID } },
                { new: true }
            );
            const updatedFriend = await User.findOneAndUpdate(
                { _id: req.params.friendID },
                { $addToSet: { friends: req.params.userID } },
                { new: true }
            );
            if (!updatedUser || !updatedFriend) {
                return res.status(500).json({message: "Failed to update friends list..."})
            }
            res.status(200).json({ message: `${updatedUser.username} and ${updatedFriend.username} are now friends~` })
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // DELETE "/:userID/friends/:friendID"
    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userID },
                { $pull: { friends: req.params.friendID } },
                { new: true }
            );
            const friend = await User.findOneAndUpdate(
                { _id: req.params.friendID },
                { $pull: { friends: req.params.userID } },
                { new: true }
            );
            if (!user || !friend) {
                return res.status(500).json({message: "One or both ID's provided weren't found."})
            }
            res.json({message: `${user.username} and ${friend.username} are no longer friends.`})
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
};