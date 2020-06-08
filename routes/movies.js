const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js')

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMovies => res.render('movies', {movies: allMovies}))
        .catch(err => console.log('Error displaying the movies:', err))
});

router.get('/movies/:movieId', (req, res, next) => {
    Movie.findById(req.params.movieId)
        .then(movie => res.render('movieDetails', {movie: movie}))
        .catch(err => console.log('Error displaying the movie:', err))
})

module.exports = router;