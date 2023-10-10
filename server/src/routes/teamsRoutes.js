const { Router } = require("express");
const teamsRoutes = Router();

const getTeamsHandler = require("../handllers/getTeamsHandler");

teamsRoutes.get("/teams", getTeamsHandler);

module.exports = teamsRoutes;