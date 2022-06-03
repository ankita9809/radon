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
    //let a = arrMovies.length
    if(req.params.indexNumber > 3){
         res.send('Invalid Index') 
         
    } else {res.send(arrMovies[req.params.indexNumber])
    return;
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

//  router.get('/candidates', function(req, res){
//      console.log('Query paramters for this request are '+JSON.stringify(req.query))
//      let gender = req.query.gender
//      let state = req.query.state
//      let district = req.query.district
//      console.log('State is '+state)
//      console.log('Gender is '+gender)
//      console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//      res.send(candidates)
//  })

//  router.get('/candidates/:canidatesName', function(req, res){
//      console.log('The request objects is '+ JSON.stringify(req.params))
//      console.log('Candidates name is '+req.params.canidatesName)
//      res.send('Done')
//  })

router.get('/movies',function(req,res){


})
module.exports = router;
// adding this comment for no reason