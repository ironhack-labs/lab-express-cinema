const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/movies', (req, res, next) => {
    Movie.find({}, {title: 1, image: 1})
    .then(movies => {
        res.render('movies', {movies})
    })
    .catch(err => console.error(err))
})

router.get('/movie/:id', (req, res, next) => {
    console.log(req.params)
    Movie.findById(req.params.id)
    .then(movie => {
        console.log(movie)
        res.render('one-movie', movie)
    })
    .catch(err => console.error(err))
})

module.exports = router;
