const { Router } = require("express");
const DriversRoutes = require("./DriversRoutes");

const mainRouter = Router();
mainRouter.use('/drivers', DriversRoutes);

module.exports = mainRouter;