const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET Movies page */
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((movies) => {
        res.render('movies', { movies })
    })
    /* .catch((e) => next(e)); */
})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        res.render('movie', { ...movie.toJSON(), detail: true });
    })
    .catch((e) => next(express));
})

module.exports = router;
