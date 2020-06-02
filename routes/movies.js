const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');


router.get('/', (req, res, next) => {
    Movie.find()
    .then(movies => res.render('movies', {movies}))
    .catch(err => {
        console.log(err);
});
});


router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => res.render('see-more', {movie}))
    .catch(err => console.log(err));
});

module.exports = router;