const express = require('express');
const router = express.Router();

const Movie = require('./../models/movie.model')

router.get('/', (req, res) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

router.get('/movie/:id', (req, res) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(movie => {
            res.render('movie-info', movie)
        })
})

module.exports = router;
