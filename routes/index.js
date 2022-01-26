//jshint esversion:8

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {

    Movie.find()
        .then(movies => {
            //console.log(`Got ${movies} movies from DB.`);
            res.render('movies', {movies});
        })
        .catch((err) => console.log('Something went wrong while trying to get movies from DB.',err));
    
});
router.get('/movie/:id', (req, res, next) => {
    const movieId = req.params.id;
    
    Movie.findById(movieId)
        .then(movie => {
            //console.log(movie);
            res.render('movie-details', {movie});
        })
        .catch((err) => console.log('Something went wrong while trying to get movie from DB.',err));
});

module.exports = router;
