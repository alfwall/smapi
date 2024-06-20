const { Schema, Types, model } = require("mongoose");

const userSchema = new Schema({
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
                //console.log("Validating ${value} for email...")
                return /^\S+@\S+\.\S+$/.test(value);
            },
            message: m => `${m.value} is not a valid email!`
        }
    },
    thoughts: [{ type: Types.ObjectId, ref: "Thought" }],
    friends: [{ type: Types.ObjectId, ref: "User" }]
},
{
    collection: "users"
});

userSchema.virtual("friendCount")
    .get(function () {
        return this.friends.length;
    });

const User = model("user", userSchema);

module.exports = User;