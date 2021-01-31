const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();



router.get('/movies',(req,res,next)=>{
    Movie.find()
    .then(movies =>{
        res.render('movies',{movies})
    })
    .catch((e)=> next(e))
})

router.get('/movies/:movieId',(req,res,next)=>{
    const{movieId} = req.params
    Movie.findById(movieId)
    .then(theMovie => res.render('movieDetails',{movie: theMovie}))
    .catch(err => console.log('Error in details',err))
})

module.exports = router;