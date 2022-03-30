const router = require('express').Router();
const Movie = require('../models/Movie.model');

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(theMovies => {
            res.render('movies.hbs', { movies: theMovies });
        })
        .catch(err => {
            console.log('Error while getting the movies from the DB: ', err);
            next(err);
        });
});

router.get('/movies/:movieId', (req, res, next) => {
    const { movieId } = req.params;
    
    Movie.findById(movieId)
        .then(theMovie => res.render('movie-details.hbs', { movie: theMovie }))
        .catch(err => {
            console.log('Error while retrieving movie details: ', err);
            next(err);
        });
});

module.exports = router;