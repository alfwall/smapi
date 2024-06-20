const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getUsers, associateThoughtsWithUsers, getReactions } = require("./data");


connection.on("error", (error) => error);

connection.once("open", async () => {
    console.log("Beginning seeding...");

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
    console.log(`Seeded ${usersData.length} users!`)

    // Insert thoughts
    const thoughts = associateThoughtsWithUsers();
    const thoughtsData = await Thought.insertMany(thoughts);
    console.log(`Seeded ${thoughtsData.length} thoughts!`)

    // Create reactions
    const reactions = getReactions();
    for (let i=0; i<reactions.length; i++) {
        let randomThought = thoughtsData[Math.floor(Math.random() * thoughtsData.length)]
        let randomThoughtID = randomThought["_id"];
        await Thought.updateOne({_id: randomThoughtID}, {$push: {reactions: reactions[i]}});
    }
    console.log(`Seeded ${reactions.length} reactions!`)

    // Done! Cleanup.
    console.log("Done seeding!");
    process.exit(0);
});