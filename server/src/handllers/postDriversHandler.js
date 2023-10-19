const postDriver = require("../controllers/postDrivers")

const postDriverHandler = async (req,res) => {
const {forename, surname, description, image, dob, nationality} = req.body;
const createdinDB = true;
try {
    const newDriver = await postDriver(forename, surname, description, image, dob, nationality, createdinDB);
    res.status(200).json(newDriver);
} catch (error) {
    res.status(404).json({error: error.message})
}
}

module.exports = postDriverHandler;
