const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            console.log('Movies', allMovies)
            res.render('movies', { allMovies })
        })
        .catch(err => console.log('Error while retrieving movie details: ', err))
});

module.exports = router;