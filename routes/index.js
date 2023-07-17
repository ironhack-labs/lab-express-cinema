const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((movies) => {
            res.render('movies', { movies });
        })
        .catch((error) => {
            console.log('Error retrieving movies from the database:', error);
            next(error);
        });
});



router.get('/movies/:id', (req, res, next) => {
    const movieId = req.params.id;

    Movie.findById(movieId)
        .then((movie) => {
            res.render('movie-details', { movie });
        })
        .catch((error) => {
            console.log('Error retrieving movie from the database:', error);
            next(error);
        });
});

module.exports = router;

module.exports = router;
