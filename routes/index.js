const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find()
    .then(movies => {
        res.render('movies', {movies: movies})
    })
    .catch(error => console.log('There was an error while retrieving the movies:', error))
})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movieFound => {
        res.render('movie-details', {movie: movieFound})
    })
    .catch(error => console.log('Error while retrieving movie details: ', error))
})


module.exports = router;

