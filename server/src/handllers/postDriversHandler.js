const postDriver = require("../controllers/postDrivers")

const postDriverHandler = async (req,res) => {
const {forename, surname, description, image, dob, nationality} = req.body;
try {
    const newDriver = await postDriver(forename, surname, description, image, dob, nationality);
    res.status(200).json(newDriver);
} catch (error) {
    res.status(404).json({error: error.message})
}
}

module.exports = postDriverHandler;
