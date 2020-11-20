const express = require('express');
// const MovieModel = require('../models/Movie.model');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((movies) => {
        res.render('movies', {movies});
        console.log(movies)
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

router.get('/movies/:movieId', (req, res, next) => {
    Movie.findById(req.params.movieId)
    .then(movieId => {
        console.log(movieId)
        res.render('movie-details', {movieId})
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

module.exports = router;
