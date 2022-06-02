const express = require('express');

const router = express.Router();

router.get('/sol1', function (req, res) {
    const array=[1,2,3,5,6,7]
    let total = 0
    for(let i in array){
        total += array[i]
    }

    let lastDigit = array.pop()
    let sumOfNumber = lastDigit * (lastDigit+1)/2
    let missingNumber=sumOfNumber - total

    res.send(  { data: missingNumber  }  )
});


router.get('/sol2', function(req, res){
    const arr = [33,34,35,37,38]

    let len = arr.length

    let total = 0
    for(var i in arr){
        total += arr[i]
    }
    let first = arr[0]
    let last = arr.pop()
    let sum = (len + 1) * (first + last)/2
    let missingNumber = sum - total
    res.send({data: missingNumber})
})


module.exports = router;
// adding this comment for no reason