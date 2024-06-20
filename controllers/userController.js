const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models")





module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            const usersObject = { users };
            res.json(usersObject);
        }
        catch(error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async createUser(req, res) {

    }
};