const router = require("express").Router();
const {
    getThoughts,
    getSpecificThought,
    createNewThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require("../../controllers/thoughtController");

router.route("/")
    .get(getThoughts)
    .post(createNewThought);
router.route("/:thoughtID")
    .get(getSpecificThought)
    .put(updateThought)
    .delete(deleteThought);
router.route("/:thoughtID/reactions")
    .post(addReaction);
router.route("/:thoughtID/reactions/:reactionID")
    .delete(removeReaction);


module.exports = router;