const express = require('express');
const router = express.Router();
const hbs = require('hbs');
const path = require('path');

const Movie = require('../models/Movie.models');

router.get('/', (req, res, next) => {
    Movie.find()
    .then(allTheMoviesFromDB => {
        console.log('Retrieved movies from DB:', allTheMoviesFromDB);
        res.render('movies', { movies: allTheMoviesFromDB } );
    })
    .catch(error => {
        console.log('Error while getting the celebrities from the DB: ', error);
    })
})

router.get('/details/:movieId', (req, res, next) => {
    Movie.findById(req.params.movieId)
    .then( (movieDetails) => {
    console.log(movieDetails)
    res.render('movie-details', { movieDetails })
    })
    .catch( (err) => {
    next(err)
    })
});

module.exports = router 
