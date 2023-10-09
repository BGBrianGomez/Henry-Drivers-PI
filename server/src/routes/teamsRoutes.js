const { Router } = require("express");
const router = Router();

const getTeamsHandler = require("../handllers/getTeamsHandler");

router.get("/teams", getTeamsHandler);

module.exports = router;