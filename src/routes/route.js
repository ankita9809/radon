const express = require('express');
const router = express.Router();
const memes = require("../controllers/memesController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//----------------------------------------------------------------- Memes Data ---------------------------------------------------------------------

router.get("/memes/getAllMemes", memes.getAllMemes)
router.post("/memes/memesHandler", memes.memesHandler)




module.exports = router;