const express = require('express');
const { findById } = require('../models/Movie.model');
const router = express.Router();
const Movie = require("../models/Movie.model")
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movie => res.render('movies', { movie }))
        .catch(err => console.log(err))
})

router.get('/movies/:movie_id', (req, res) => {
    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => res.render('details', movie))
        .catch(err => console.log(err))
})

module.exports = router;
