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

    // TODO: Give them each random amounts of random friends
    for (let i = 0; i < usersData.length; i++) {
        // oh god wait how would I do this effectively, actually
    }

    // Insert thoughts
    const thoughts = associateThoughtsWithUsers();
    const thoughtsData = await Thought.insertMany(thoughts);
    for (let i = 0; i < thoughtsData.length; i++) {
        let thoughtUsername = thoughtsData[i]["username"];
        console.log(`Updating username ${thoughtUsername} with thoughtID ${thoughtsData[i]["_id"]}`)
        await User.updateOne(
            { username: thoughtUsername },
            { $push: { thoughts: thoughtsData[i]["_id"] } }
        );
    }
    console.log(`Seeded ${thoughtsData.length} thoughts!`)

    // Create reactions
    const reactions = getReactions();
    for (let i = 0; i < reactions.length; i++) {
        let randomThought = thoughtsData[Math.floor(Math.random() * thoughtsData.length)]
        let randomThoughtID = randomThought["_id"];
        await Thought.updateOne(
            { _id: randomThoughtID },
            { $push: { reactions: reactions[i] } }
        );
    }
    console.log(`Seeded ${reactions.length} reactions!`)

    // Finally, go back into User data and add to their thoughts arrays


    // Done! Cleanup.
    console.log("Done seeding!");
    process.exit(0);
});