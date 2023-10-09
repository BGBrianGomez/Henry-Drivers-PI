const { Router } = require("express");
const router = Router();

const getAllDriversHandller = require("../handllers/getAllDriversHandller")
const getDriverByIdHandller = require("../handllers/getDriverByIDHandller")
const getDriverByNameHandller = require("../handllers/getDriverByNameHandller")

router.get("/drivers", getAllDriversHandller)
router.get("/drivers/:id", getDriverByIdHandller)
router.get("/drivers/name?name={name}", getDriverByNameHandller)

module.exports = router;