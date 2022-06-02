const express = require('express');
const externalModule = require('../logger/logger')
const externalModule1 = require('../util/helper')
const externalModule2 = require('../validator/formatter')
const underscore = require('underscore')
const lodash = require('lodash')


const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    externalModule1.printDate()
    externalModule1.printMonth()
    externalModule1.getBatchInfo()
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    externalModule2.trim()
    externalModule2.changetoLowerCase()
    externalModule2.changeToUpperCase()
    
    res.send('My third api!')
});

router.get('/hello', function (req, res) {
    
    //Problem 1
    const arrayMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    console.log(lodash.chunk(arrayMonths, 3))

    //Problem 2
    const arrayOdd = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(arrayOdd))

    //Problem 3
    const array1 = [1,2]
    const array2 = [2,3,4]
    const array3 = [1,2,5,4]
    const array4 = [6,10,11,7,8]
    const array5 = [5,9]

    let duplicate = lodash.union(array1, array2, array3, array4, array5)
    console.log(duplicate)


    //Problem 4
    const movies = [["horror", "The shining"],["drama", "Titanic"],["thriller", "Shutter Island"],["fantasy", "Pans Labyrinth"]]

    console.log(lodash.fromPairs(movies))
    
    res.send('Problem Statement 4')
});

router.get('/test-me4', function (req, res) {
    
    res.send('My fifth api!')
});

module.exports = router;
// adding this comment for no reason