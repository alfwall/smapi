const { ObjectId } = require("mongoose").Types;
const { Thought } = require("../models");

module.exports = {
    // GET "/"
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.status(200).json({ thoughts });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // GET "/:thoughtID"
    async getSpecificThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtID });
            if (!thought) {
                res.status(500).json({ message: "Could not find thought with provided ID." })
            }
            res.status(200).json({ thought });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // POST "/" WITH BODY
    async createNewThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);
            res.status(200).json({ newThought });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // PUT "/:thoughtID" WITH BODY
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtID },
                { thoughtText: req.body.thoughtText },
                { new: true }
            );
            if (!thought) {
                return res.status(500).json({ message: "Could not find thought with provided ID." })
            }
            res.status(200).json({ thought });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // DELETE "/:thoughtID"
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtID });
            if (!thought) {
                return res.status(500).json({ message: "Couldn't find thought by provided ID." })
            }
            res.status(200).json({ message: "Thought successfully deleted." });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // POST "/:thoughtID/reactions" WITH BODY
    async addReaction(req, res) {
        try {
            const newReaction = {
                reactionBody: req.body.reactionBody,
                username: req.body.username
            };
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtID },
                { $addToSet: { reactions: newReaction } },
                { new: true }
            );
            if (!thought) {
                return res.status(500).json({ message: "Couldn't find thought to add reaction to." })
            }
            res.status(200).json(thought);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // DELETE "/:thoughtID/reactions/:reactionID"
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtID});
            thought.reactions.pull({reactionID: req.params.reactionID})
            thought.save();
            if (!thought) {
                return res.status(500).json({ message: "Couldn't find thought to remove reaction to." })
            }
            res.status(200).json(thought);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
};


