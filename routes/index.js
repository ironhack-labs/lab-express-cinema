const express = require('express');
const router = express.Router();

require('../db/index')

const Movie = require('../models/Movie.model')

router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .sort({ title: 1 })
        .then(allMovies => {
            res.render('movies', { allMovies })
        })
})

router.get('/movie/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(allMovies => {
            console.log(allMovies)
            res.render('movieDetails', allMovies)
        })
        .catch(err => console.log(err))
})

module.exports = router;
