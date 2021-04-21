const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((movies) => {
            res.render('movies/movies', {movies});
        })
        .catch((err) => console.error(err));
})

router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params;
    Movie.findById(id)
        .then((movie) => {
            console.log(movie);
            res.render('movies/show-movie', movie);
        })
        .catch((err) => console.error(err));
})

module.exports = router;
