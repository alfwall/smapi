const { ObjectId } = require("mongoose").Types;
const { Thought } = require("../models");

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
    async getSpecificThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtID });
            res.status(200).json({ thought });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async createNewThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);
            res.json({ newThought });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async updateThought(req, res) {
        try {
            throw Error("TODO: NOT IMPLEMENTED")
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async deleteThought(req, res) {
        try {
            throw Error("TODO: NOT IMPLEMENTED")
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async addReaction(req, res) {
        try {
            throw Error("TODO: NOT IMPLEMENTED")
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async removeReaction(req, res) {
        try {
            throw Error("TODO: NOT IMPLEMENTED")
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
};


