const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Movie = require('../models/Movie.model')


router.get('/', (req, res, next) => {
    Movie.find({}, {title: 1, image: 1})
    .then(movies => {
        res.render('movies', {movies})
    })
    .catch(err => console.error(err))
})

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => {
        console.log(movie)
        res.render('one-movie', movie)
    })
    .catch(err => console.error(err))
})

module.exports = router;
