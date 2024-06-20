const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json({thoughts});
        }
        catch(error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async createThought(req, res) {
        
    }
};


