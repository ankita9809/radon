const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const Weather = require("../controllers/weatherController")
const memes = require("../controllers/memesController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//----------------------------------------------------------------- Weather Data -------------------------------------------------------------------

router.get("/weather/getWeather", Weather.getWeather)
router.get("/weather/getCity", Weather.getCity)




module.exports = router;