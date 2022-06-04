const express = require('express');
     const myHelper = require('../util/helper')
     //const underscore = require('underscore')

const router = express.Router();

    router.get('/movies', function (req, res) {
        const arrMovies= ['Rang de basanti', 'The shining','Lord of the rings', 'Batman begins']
        res.send(arrMovies)
 });

 router.get('/movies/:indexNumber', function(req,res){
    const arrMovies= ['Rang de basanti', 'The shining','Lord of the rings', 'Batman begins']
        //console.log(arrMovies[index.params.indexNumber])
     res.send(arrMovies[req.params.indexNumber])
 })

  router.get('/movies1/:indexNumber', function (req, res) {
    const arrMovies= ['Rang de basanti', 'The shining','Lord of the rings', 'Batman begins']
    let a = arrMovies[req.params.indexNumber]
    //if(req.params.indexNumber > 3){
        if(a!== arrMovies.length){
         res.send(a || 'Invalid Index') 
        }  
 });

 router.get('/films', function(req, res){
    const arrString = [
        {'id': 1, 'name': 'The Shining'},
        {'id': 2, 'name': 'Incendies'},
        {'id': 3, 'name': 'Rang de basanti'},
        {'id': 4, 'name': 'Finding Nemo'},
    ]
    res.send(arrString)
 })

  
router.get('/films/:filmid',function(req,res){
    const arrString = [
        {'id': 1, 'name': 'The Shining'},
        {'id': 2, 'name': 'Incendies'},
        {'id': 3, 'name': 'Rang de basanti'},
        {'id': 4, 'name': 'Finding Nemo'},
    ]
    
    let a = arrString[req.params.filmid -1]
    if(a !== arrString.length){
        res.send(a || "No movies exists with this id")
    }
})
module.exports = router;
// adding this comment for no reason