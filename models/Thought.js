const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({

});

const Thought = mongoose.model("Thought", thoughtSchema);

Thought.create([

]);

module.exports = Thought;