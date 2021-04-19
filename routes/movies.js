const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/', (req, res, next) => {
    Movie.find({})
        .then(data => {
            res.render('movies', {movies: data});
        })
        .catch(error => {
            console.error('Error while getting the movies from the DB: ', error);
            next(error);
        })
});

module.exports = router;