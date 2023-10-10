const axios = require("axios");
const { Driver, Teams } = require("../db");

const noimagen = "https://media-public.canva.com/liUNw/MAEWOiliUNw/1/tl.png";

let allDrivers = [];

const getAllDrivers = async (name) => {
  const allDriversDB = await Driver.findAll({
    includes: {
      model: Teams,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const getApi = (await axios("http://localhost:5000/drivers")).data;
  const allDriversApi = getApi.map((driver) => {
    return {
      id: driver.id,
      forname: driver.forname,
      surname: driver.surname,
      description: driver.description,
      image: driver.image.url || noimagen,
      nationality: driver.nationality,
      dob: driver.dob,
    };
  });

  allDrivers = [...allDriversApi, ...allDriversDB];

  if (name) {
    driversByName = allDrivers.filter((driver) => 
    driver.forename.toLowerCase().startsWith(name.toLowerCase()));
    if (driversByName.length) {
        return driversByName.slice(0, 15);
    } else {
        throw new Error(`No se encontro por el nombre: ${name}`);
    }
} 

  return allDrivers;
};

module.exports = getAllDrivers;
