const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/browse', (req,res,next) => {
    Movie.find()
    .then(moviesFromDb => {
        console.log("Movie list: ", moviesFromDb)
        res.render('movie-views/browseMovies', {movies: moviesFromDb}) })
    .catch((err) => {
        console.log("Something went wrong retrieving all movies: ", err)
    })
})

router.get('/details/:id', (req,res,next) => {
    Movie.findById(req.params.id)
    .then(movieFromDb => {
        console.log("Movie details: ", movieFromDb)
        res.render('movie-views/movieDetails', {movie: movieFromDb}) })
    .catch((err) => {
        console.log("Something went wrong retrieving all movies: ", err)
    })
})
module.exports = router;
