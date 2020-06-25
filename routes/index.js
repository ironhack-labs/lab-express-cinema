const express = require('express');
const Movie = require('./../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMovies => res.render('movies', { allMovies })
            .catch(err => console.log('Error while getting movies:', err)))
})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(allMovies => res.render('movies-details', { allMovies })
            .catch(err => console.log('Error while getting movies:', err)))
})

module.exports = router