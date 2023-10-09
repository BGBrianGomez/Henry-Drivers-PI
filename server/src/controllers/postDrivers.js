const {Driver, Teams} = require("../db");

const postDrivers = async(forename, surname, description, image, dob, nationality, driverTeams)=>{
    Driver.findOrCreate({
        where: {forename,
        surname},
        defaults: {forename, surname, description,image,dob,nationality,driverTeams}
    })
    .then(([user,created])=>{
        if(created){
            return `Nuevo usuario creado: ${user.surname}`
        } else {
            return `Usuario existente: ${user.surname}`
        }
    })
    .catch(err => {
        throw new Error(err);
    })
}

module.exports = postDrivers;