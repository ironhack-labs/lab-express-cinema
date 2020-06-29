const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movies => res.render('movies', {movies}))
        .catch(error => console.log(error))
})

router.get('/movies/:details', (req, res) => {
    const movieId = req.params.details;
    Movie
        .findById(movieId)
        .then(movie => res.render('movieDetails', {movie}))
        .catch(error => console.log(error))
})

module.exports = router;