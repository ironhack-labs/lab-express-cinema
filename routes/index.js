const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(moviesFromDB => {
            //console.log('Movies fron DB: ', moviesFromDB);
            res.render('movies', {movies: moviesFromDB})
        })
        .catch(error => {
            console.log(error);
        })
});

router.get('/movie/:id', (req, res, next) => {
    Movie
        .findById(req.params.id)
        .then(movie => {
            res.render('movie', {movie: movie})
        })
})

module.exports = router;
