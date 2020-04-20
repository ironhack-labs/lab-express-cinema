const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.js');

// GET list of movies
router.get('/movies', (req, res) => {
    Movie.find().then((allTheMovies) => {
        res.render('movies', {
            movies: allTheMovies,
        });
    });
});

// GET movie description
router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    Movie.findById(movieId).then((retrievedMovie) => {
        res.render('show', {
            movie: retrievedMovie,
        });
    });
});



module.exports = router;