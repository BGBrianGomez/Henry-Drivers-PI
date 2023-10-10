const { Router } = require("express");
const driversRoutes = Router();

const getAllDriversHandller = require("../handllers/getAllDriversHandller");
const getDriverByIdHandller = require("../handllers/getDriverByIDHandller");
const getDriverByNameHandller = require("../handllers/getDriverByNameHandller");
const postDriverHandler = require("../handllers/postDriversHandler");

driversRoutes.get("/drivers", getAllDriversHandller);
driversRoutes.get("/drivers/:id", getDriverByIdHandller);
driversRoutes.get("/drivers/name?name={name}", getDriverByNameHandller);
driversRoutes.post("/drivers", postDriverHandler);

module.exports = driversRoutes;
