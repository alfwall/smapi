const usernames = [
    "jerryseiny99",
    "zer0Standards",
    "ectoBiologist",
    "mrStrider",
    "squiddlies_the_show",
    "actualHorse",
    "literallyASkeleton",
    "ketchupDrinker"
];

const emails = [
    "test@gmail.com",
    "nonononotthat@aol.com",
    "mongo@bongo.gov",
    "discombobulate@abc.xyz",
    "homestar@runner.com",
    "bone@zone.com",
    "papyrus@skellybones.org",
    "comicsans@skellybones.org"
];

const thoughts = [
    "hhhhhhhhhhorses",
    "guys help I'm trapped in a mongodb collection, it's so cold in here",
    "what are you DOING step bro???",
    "see ya later suckers! I rev up my motorcycle and make hella smoke. when it clears, I am face down on the ground, dead.",
    "zimbabwe",
    "?????????????????????????",
    "I think that moths should be allowed to vote",
    "meet me in the Denny's parking lot at 3am if you want an ass-kicking",
    "KAHHHHHHHHHHHHHHHHHHN!!!",
    "once more I will place an ad on craigslist...",
    "ITS TIME TO D-D-D-DUEL",
    "it is always ethical to preserve media that companies have made inaccessible to the public",
    "there is no ethical consumption under capitalism",
    "BIRDS AREN'T REAL, DO YOUR OWN RESEARCH",
    "the memes, batman"
];

const reactions = [
    "what does this mean?",
    "this is what's wrong with zillennials",
    "OP is a stupid head",
    "first",
    "cringe",
    "grabs your bike and runs",
    "I'm dying, Squirtle",
    "instructions unclear: dick caught in ceiling fan",
    "interesting argument. however, I am in your walls",
    "don't you DARE",
    "I am knocking on your door, let me in",
    "check your mailbox",
    "😊",
    "☹",
    "😡",
    "😭",
    "♥",
    "😂",
    "😴"
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];


const getUsers = () => {
    const users = [];
    for (let i = 0; i < usernames.length; i++) {
        users.push({
            username: usernames[i],
            email: emails[i],
            thoughtIDs: [],
            friends: []
        });
    }
    return users;
};

const associateThoughtsWithUsers = () => {
    const thoughtsResults = [];

    for (let i=0; i<thoughts.length; i++) {
        thoughtsResults.push({
            thoughtText: thoughts[i],
            username: getRandomArrItem(usernames),
            reactions: []
        });
    }

    return thoughtsResults;
};

const getReactions = () => {
    const reactionsResults = [];

    for (let i=0; i<reactions.length; i++) {
        reactionsResults.push({
            reactionBody: reactions[i],
            username: getRandomArrItem(usernames)
        });
    }

    return reactionsResults;
};

module.exports = { getUsers, associateThoughtsWithUsers, getReactions };