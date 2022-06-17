const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


module.exports = router;

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


/* Mostrar peliculas GET */
router.get('/movies', (req,res,next)=>{
    Movie.find()
    .then(moviesFromDB =>{
        res.render('movies',{movies: moviesFromDB})
    })
    .catch(error => console.log('Ah surgido un error', error))
})

router.get('/onlyMovie/:_id',(req,res,next)=>{
    const {_id} =req.params;
    console.log('que es ID: ',_id)
    Movie.findById(_id)
    .then(foundMovie =>{
    res.render('onlyMovie',{movie:foundMovie})
    })
    .catch(error => console.log('Ha salido un error: ', error))    
})