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
    players.push(ele)
    
    for(let i in players){
        if(i.name==element.name){
            res.send("Player already exists")
        } else{
            res.send({msg: players, status:true})
        }
        return;
    }
    
})

module.exports = router;