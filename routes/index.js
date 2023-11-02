const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movies => {
            // console.log(movies)
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})
router.get('/movie/:movies_id', (req, res) => {
    const { movies_id } = req.params
    Movie
        .findById(movies_id)
        .then(movie => {
            res.render('movie-description', { movie })
        })
        .catch(err => console.log(err))
})

module.exports = router;
