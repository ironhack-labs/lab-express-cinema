const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(allMovies => {
        console.log(allMovies)
        res.render('movies', {allMovies})
    })
    .catch(error => console.log('There was an error while retrieving the movies from the DB: ', error));
});

router.get('/movies/:movieId', (req, res, next) => {
    Movie.findById(req.params.movieId)
    .then(movieById => {
        res.render('movie', {movieById})
    })
});


module.exports = router;
