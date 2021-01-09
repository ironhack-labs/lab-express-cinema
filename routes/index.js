const express = require('express');
const Movie = require('../models/Movie.model.js');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req,res,next) => {
    Movie.find()
    .then(allMovies => {
        res.render(`movies`, {movies: allMovies});
    })
    .catch(err => {
        console.log(`error getting movies due to ${err}`);
    })
});

router.get(`/movies/:movieId`, (req,res,next) => {
    const movieId = req.params.id;

    Movie.findById(movieId)
        .then(theMovie => {
            res.render(`movie-details`, {movie: theMovie})
        })
        .catch(err => {
            console.log(`error getting the book due to ${err}`);
        })
});


module.exports = router;
