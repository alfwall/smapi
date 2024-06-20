console.log(`create router...`)
const router = require("express").Router();
console.log(`sourcing the api routes...`)
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use((req, res) => res.send("Don't request the API directly!"));

module.exports = router;
