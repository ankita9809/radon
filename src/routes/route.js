const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook1", BookController.createBook1)

router.get("/getBookData1", BookController.getBookData1)

router.get("/bookList", BookController.bookList)

router.post("/getBooksInYear", BookController.getBooksInYear)

router.post("/getParticularBooks", BookController.getParticularBooks)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;