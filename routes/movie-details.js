const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/:movieId', (req, res, next) => {
    const { movieId } = req.params;
    Movie.findById(movieId)
        .then(data => {
            res.render('movie-details', {movie: data});
        })
        .catch(error => {
            console.errir('Error while getting the movies from the DB: ', error);
            next(error);
        })
});

module.exports = router;