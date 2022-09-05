const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => { 
    Movie.find()
        .then((movies) => {
            res.render('movies', { movies });
        })
        .catch((err) => 
            console.log('Error while getting movies from database', err).next(err)
        );
});

router.get('/movies/:movieId', (req, res, next) => { 
    const movieId = req.params;
    Movie.findById(movieId)
        .then((movie) => {
            res.render('details', { movie });
        })
        .catch((err) => 
            console.log('Error while getting movie details from database', err).next(err)
        );
});

module.exports = router;
