const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie
        .find()
        .select({ image: 1, title: 1 })
        .then((allMovies) => {
            res.render('movies', { allMovies })
        })
})

router.get('/movie/:id', (req, res) => {
    Movie
        .findById(req.params.id)
        .then((movieDetail) => {
            res.render('movie-detail', movieDetail)
        })
})

module.exports = router;
