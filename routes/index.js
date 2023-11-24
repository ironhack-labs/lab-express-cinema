const express = require('express');
const mongoose = require('../db/index.js');
const router = express.Router();
// const movies = require('../seeds/movies.seed.js');
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(allMoviesFromDB => {
        console.log('Retrieved movies from  DB', allMoviesFromDB);
        res.render('movies', { allMoviesFromDB });
    })
    .catch(err => {
        console.error('An error happened:', err);
    });
});

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movieFromDB => {
            console.log('Retrieved movies from  DB', movieFromDB);
            res.render('movie-details', { movieFromDB });
        })
        .catch(err => {
            console.error('An error happened:', err);
    });
});

module.exports = router;
