const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((movies) => {
            res.render('movies', {movies});
        })
        .catch((error) => console.log(`The movies can't be shown due to an error`, error));
});

router.get('/movies/:movieId', (req, res, next) => {
    Movie.findById(req.params.movieId)
        .then((movie) => {
            res.render('details', {movie});
        })
        .catch((error) => console.log(`This movie can't be shown due to an error`, error));
});

module.exports = router;