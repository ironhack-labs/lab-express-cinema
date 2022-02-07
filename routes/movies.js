const Movie = require('../models/Movie.model')

const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {

    Movie.find()
    .then((moviesFromDB) => {

        res.render('movies', {movies: moviesFromDB});
    })
    .catch((err) => {
        console.log('Error getting movies from DB: ', err);
    });

});

router.get('/:movieId', (req, res, next) => {

    Movie.findById(req.params.movieId)
    .then((oneMovie) => {
        res.render("movie-details", {movie: oneMovie});
    })
    .catch((err) => {
        console.log("Error getting movie details from DB: ", err);
    });
})

module.exports = router;
