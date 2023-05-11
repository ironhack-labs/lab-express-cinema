const express = require('express');
const router = express.Router();

const MovieModel = require('./../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/movies', (req, res, next) => {
    MovieModel
    .find()
    .then(movies => res.render('movies', { movies: movies}))
    .catch(err => console.log(err))
})

router.get('/details/:movie_id', (req, res) => {
    const { movie_id } = req.params
    MovieModel
    .findById(movie_id)
    .then(movie => res.render('movie-details', movie))
    .catch(err => console.log(err))
})

module.exports = router;
