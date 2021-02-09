const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
})

router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(allMovies => {
            res.render('movies', { movies: allMovies })
        })
        .catch(error => console.log(error))
})

router.get('/movies/:movieID', (req, res, next) => {
    Movie
        .findById(req.params.movieID)
        .then(oneMovie => {
            res.render('movie-details', { oneMovie })
        })
        .catch(error => console.log(error))
})

module.exports = router;
