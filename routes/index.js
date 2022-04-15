const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model.js')

router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => {
            res.render("movies", { movies })
        })
        .catch(err => console.log(err))
})

router.get('/movie-details/:movieID', (req, res) => {
    const { movieID } = req.params

    Movie
        .findById(movieID)
        .then(movies => {
            res.render("movie-details", { movies })
        })
        .catch(err => console.log(err))
})

module.exports = router;
