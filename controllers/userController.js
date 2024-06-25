const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

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
    }
};