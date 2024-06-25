const { User } = require("../models");

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json({ users });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async getSpecificUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userID });
            res.status(200).json({ user });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
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
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userID },
                { username: req.body.username },
                { new: true });
            if (!user) {
                return res.status(404).json({ message: "Could not find user with provided ID." })
            }
            res.status(200).json({ user });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({_id: req.params.userID});
            if (!user) {
                return res.status(404).json({message: "No user found to delete"});
            }
            // TODO: DELETE ALL THOUGHTS RELATED TO USER

            res.json({message: "User successfully deleted."});
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async addFriend(req, res) {
        try {
            throw Error("TODO: NOT IMPLEMENTED")
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async removeFriend(req, res) {
        try {
            throw Error("TODO: NOT IMPLEMENTED")
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
};