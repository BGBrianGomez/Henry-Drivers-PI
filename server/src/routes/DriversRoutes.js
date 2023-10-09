const { Router } = require("express");
const router = Router();

const getAllDriversHandller = require("../handllers/getAllDriversHandller");
const getDriverByIdHandller = require("../handllers/getDriverByIDHandller");
const getDriverByNameHandller = require("../handllers/getDriverByNameHandller");
const postDriverHandler = require("../handllers/postDriversHandler");

router.get("/drivers", getAllDriversHandller);
router.get("/drivers/:id", getDriverByIdHandller);
router.get("/drivers/name?name={name}", getDriverByNameHandller);
router.post("/drivers", postDriverHandler);

module.exports = router;
