const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const Weather = require("../controllers/weatherController")
const memes = require("../controllers/memesController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// ------------------------------------------------------- CoWin Data -----------------------------------------------------------------------------

router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getDistrictsById", CowinController.getDistrictsById)


//----------------------------------------------------------------- Weather Data -------------------------------------------------------------------

router.get("/weather/getWeather", Weather.getWeather)
router.get("/weather/getCity", Weather.getCity)


//----------------------------------------------------------------- Memes Data ---------------------------------------------------------------------

router.get("/memes/getAllMemes", memes.getAllMemes)
router.post("/memes/memesHandler", memes.memesHandler)




module.exports = router;