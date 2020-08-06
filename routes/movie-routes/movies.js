const express = require('express');
const router  = express.Router();
const Movie = require("../../models/Movie.model");

//GET route for movies root
router.get('/', (req, res, next) => {
    Movie.find()
        .then(moviesFromDB => {
            console.log(moviesFromDB);
            res.render('movie-views/movies', {movies: moviesFromDB});
        }).catch(err => console.log(`Error finding all movies: ${err}`))
})

//GET route for movie's detail page
router.get('/details/:movieId', (req, res, next) => {
    Movie.findById(req.params.movieId)
        .then(movieFromDB => {
            console.log(movieFromDB);
            res.render('movie-views/movie-details', {movie: movieFromDB})
        }).catch(err => console.log(`Error finding movie by Id: ${err}`))
})

module.exports = router;