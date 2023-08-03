const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')

router.get('/', (req, res, next) => {
    res.render('index')
});

router.get('/movies/list', (req, res) => {
    Movie
        .find()
        .then(movies => res.render('movies', { movies: movies }))
        .catch(err => console.log(err))

});

router.get('/movies/movie/:movie_id', (req, res) => {
    const { movie_id } = req.params
    Movie
        .find({ _id: movie_id })
        .then(movies => res.render('movie', { movies: movies }))
        .catch(err => console.log(err))
});

module.exports = router;
