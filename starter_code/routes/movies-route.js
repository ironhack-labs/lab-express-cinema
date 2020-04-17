const express = require('express')
const router = express.Router()

const Movie = require('../models/movies-model')

router.get('/movies', (req, res, next) => {
    Movie.find().then(allMovies => {
        console.log({ allMovies });
        //res.render('movies', { allMovies });
    });
});

module.exports = router