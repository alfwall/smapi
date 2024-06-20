const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getUsers, associateThoughtsWithUsers } = require("./data");


connection.on("error", (error) => error);

connection.once("open", async () => {
    console.log("Beginning seeding!");

    // Drop and refresh the collections if they already exist
    let userCheck = await connection.db.listCollections({ name: "users" }).toArray();
    if (userCheck.length) {
        await connection.dropCollection("users");
    }
    let thoughtCheck = await connection.db.listCollections({ name: "thoughts" }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection("thoughts");
    }

    // Insert users data 
    const users = getUsers();
    const usersData = await User.insertMany(users);
    // Insert thoughts
    const thoughts = associateThoughtsWithUsers();
    //console.log(thoughts)
    const thoughtsData = await Thought.insertMany(thoughts);
    console.log(thoughtsData)
    process.exit(0);
});