const express = require('express');
const db = require('./config/connection');

// models
const { User, Thought } = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();

app