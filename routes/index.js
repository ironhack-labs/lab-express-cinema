const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => {
            res.render('movie-list', { movies })
        })
        .catch(err => console.log(err))
})
router.get('/movie-details/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => {
            res.render('movie-details', movie)
        })
        .catch(err => console.log(err))
})

module.exports = router;