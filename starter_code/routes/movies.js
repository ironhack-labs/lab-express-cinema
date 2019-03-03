const express = require('express');
const router = express.Router();
const Movie = require('../models/moviemodel');

router.get('/movies', (req, res, ) => {
    debugger
    Movie.find({})
        .then(moviesData => {
            res.render('movies', { movies: moviesData })
        }, err => console.log(err));

});

module.exports = router;