const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use((req, res) => res.send("Don't request the API directly!"));

module.exports = router;
