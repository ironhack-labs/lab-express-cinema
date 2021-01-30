const express = require('express');
const { render } = require('../app');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// Movies
router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(e => console.log(e))
})

// Movie
router.get('/movie/:id', (req, res, next) => {
    Movie
        .findById(req.params.id)
        .then(movie => {
            res.render('movie', { movie })
        })
        .catch(e => console.log(e))
})

module.exports = router;
