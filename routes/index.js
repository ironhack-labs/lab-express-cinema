const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res) => {
    Movie.find()
    .then(moviesFromDB => {
        console.log('Movies retrieved from DB: ', moviesFromDB);
        res.render('movies-list', { movies: moviesFromDB});
    })
    .catch(error => console.log('Error while getting the movies from the DB: ', error));
});

router.get('/movie/:movieId', (req, res) => {
    const {movieId} = req.params;

    Movie.findById(movieId)
    .then(theMovie => res.render('movies-details', {movie: theMovie}))
    .catch(error => console.log('Error while retieving movie details: ', error));
});

module.exports = router;
