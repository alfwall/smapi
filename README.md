# SNAPI

[Video demo here!](https://drive.google.com/file/d/1nqkFZBcp99enAc6m3H2X4wYksQ79uZyz/view?usp=sharing)

## Description
An API for interacting with a social media app that can modify users, posts, and replies to posts. 

## TODO
- [x] Create base README
- [x] Create server.js
- [x] Create connection.js
- [x] Create base models
- [x] Create some routes 
- [x] Get ALL Users
- [x] Get ALL Thoughts
- [x] Get INDIVIDIAUL User
- [x] Get INDIVIDUAL Thought
- [x] Create new User
- [x] Update existing User
- [x] Delete existing User
- [x] EXTRA CREDIT: Delete all Thoughts related to Deleted User
- [x] Add Friend
- [x] Remove Friend
- [x] Create new Thought
- [x] Update existing Thought
- [x] Delete existing Thought
- [x] Add Reaction
- [x] Remove Reaction



## Installation
1. Spin up MongoDB Compass
2. `npm i`
3. `npm run seed`
4. `npm start`

## User Story

AS A social media startup,
I WANT an API for my social network that uses a NoSQL database,
SO THAT my website can handle large amounts of unstructured data.

## Acceptance Criteria

GIVEN a social network API...

WHEN I enter the command to invoke the application,
THEN my server is started and the Mongoose models are synced to the MongoDB database.

WHEN I open API GET routes in Insomnia for users and thoughts,
THEN the data for each of these routes is displayed in a formatted JSON.

WHEN I test API POST, PUT, and DELETE routes in Insomnia,
THEN I am able to successfully create, update, and delete users and thoughts in my database.

WHEN I test API POST and DELETE routes in Insomnia,
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.
