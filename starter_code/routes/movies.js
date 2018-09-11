//THIS IS THE MOVIES ROUTE 
const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie')

//get movies homepage
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((listOfMovies)=>{
        res.render('movies', {theMovieList: listOfMovies});
    })
    .catch((err)=>{
        next(err)
    })
});

//get movies by id
router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        res.render('show', {theMovie: movie})
    })
    .catch((err) => {
        next(err);
    })
})

module.exports = router;
