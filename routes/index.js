const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// Movies route
router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(moviesFromDB => {
            res.render('movies', { movies: moviesFromDB });
        })
        .catch(error => console.log('Error while getting the movies from the DB: ', error))

})

// Movie detail route
router.get('/movies/:id', (req, res, next) => {
    //const movieId = req.params;
    Movie
        .findById(req.params.id)
        //.findOne(movieId)
        .then(foundMovie => res.render('movie-details', foundMovie))
        .catch(error => console.log('Error while getting the movies from the DB: ', error));
})

module.exports = router;