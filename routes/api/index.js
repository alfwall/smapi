const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");
router.use("/users", userRoutes);
// TODO: UNCOMMENT THIS!!!
//router.use("/thoughts", thoughtRoutes);
module.exports = router;
