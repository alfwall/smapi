const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                console.log("Validating ${value} for email...")
                return /^\S+@\S+\.\S+$/.test(value);
            },
            message: m => `${m.value} is not a valid email!`
        }
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }]
});

userSchema.virtual("friendCount")
    .get(function () {
        return this.friends.length;
    });

const User = mongoose.model("User", userSchema);

module.exports = User;