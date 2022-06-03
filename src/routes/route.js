const express = require('express');
//const { arrayBuffer } = require('stream/consumers');
const router = express.Router();

let players = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
               "swimming"
           ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
               "soccer"
           ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]

router.post('/players', function(req, res){
    let ele = req.body.element
    let flag = false
    //players.push(ele)
    
    for(i=0; i<players.length; i++){
        if(ele.name === players[i].name){
            flag = true
            break;
        }
    }

    if(flag){
        res.send( {msg: "Name already exist"})
    }else{
        players.push(ele)
            res.send({msg: players, status:true})
        }    
})

module.exports = router;