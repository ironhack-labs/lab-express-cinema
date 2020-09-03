const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(movie => {
        console.log('List movies from DB', {movies: movie})
        res.render('movies', {movies: movie})
    })
    .catch((error) => {
        console.log(error)
    })
})

/* GET movies details page */
router.get('/movie/:id', (req, res, next) => {
    const {id} = req.params
    Movie.findById(id)
    .then(details => {
        console.log('Movie details from DB', {movie: details})
        res.render('movie', {movie: details})
    })
    .catch((error) => {
        console.log(error)
    })
})

module.exports = router;
