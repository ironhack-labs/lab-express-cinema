const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movies => {
            console.log(movies);
            res.render('movies', movies);
        })
        .catch(err => console.log(err));
});

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            console.log(movie);
            res.render('movie-details', movie);
        })
        .catch(err => console.log(err));
});

module.exports = router;