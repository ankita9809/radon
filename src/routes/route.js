const express = require('express');
const router = express.Router();

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/test-me-1", function (req, res) {
    res.send("My first ever api1!")
})

router.get("/test-me-2", function (req, res) {
    res.send("My first ever api2!")
})

router.get("/test-me-3", function (req, res) {
    res.send("My first ever api3!")
})

router.get("/test-me-4", function (req, res) {
    res.send("My first ever api4!")
})


module.exports = router;