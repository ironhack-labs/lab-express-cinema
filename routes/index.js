const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

router.get('/', (req, res) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find()
        .then(allMovies => {
            res.render('movies', { movie: allMovies })
        })
        .catch(err => console.log(err))
})

router.get('/movies/:id', (req, res) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(moviesId => {
            res.render('movie-details', moviesId)
        })
        .catch(err => console.log(err))
})

module.exports = router;

