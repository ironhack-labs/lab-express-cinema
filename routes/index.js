const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((allMoviesFromDB) => {
        res.render('movies', { movies: allMoviesFromDB })
    })
    .catch(err => console.log("An error occurred while retrieving your movies", err))
});

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movieFromDB => {
        res.render('movie-details', movieFromDB);
    })
    .catch(err => console.log("An error occurred while retrieving movie details", err))
})

module.exports = router;
