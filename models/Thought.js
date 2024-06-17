const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new Schema.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(createdAt) {
            return createdAt;
        }
    }
});


const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(createdAt) {
            return createdAt;
        }
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
});

thoughtSchema.virtual("reactionCount")
    .get(function () {
        return this.reactions.length;
    });

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;