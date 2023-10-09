const getAllDrivers = require("../controllers/getAllDrivers");

const getAllDriversHandller = async (res, req)=>{
    try {
        const allDrivers = await getAllDrivers();
        res.status(200).json(allDrivers)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};

module.exports = getAllDriversHandller;