const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log(err))
});

router.get('/movies/:movieId', (req, res) => {
    const { movieId } = req.params

    Movie
        .findById(movieId)
        .then(movie => res.render('moviesId', movie))
        .catch(err => console.log(err))
})

module.exports = router;