const {Teams} = require("../db");
const axios = require("axios");

const getTeams = async ()=>{
    const teamsDB = await Teams.findAll();

    if(!teamsDB) {
        try {
            const response = await axios.get(`http://localhost:5000/drivers`)
            const drivers = response.data;
            let teams =  drivers.map(driver=> driver.teams)
            teams = [...new Set(teams)];
            await Teams.bulkCreate(teams);
            return teams;
        } catch (error) {
            throw new Error("Error en la peticion de la API")
        }
    } else {
        
    const driverTeams = teamsDB
    .map(driver => driver.name)
    return driverTeams.sort();
    }
}

module.export = getTeams;