const express = require('express')
const Movie = require('../models/Movie.model')
const movieRoutes = express.Router()


movieRoutes.get('/', (req, res, next) => {
    Movie.find()
    .then(movies => {
        res.render('movies/movies', { movies } )
    })
    .catch(error => next(error))
})

movieRoutes.get('/:id/detail', (req, res, next) => {
    const { id } = req.params;
    Movie.findById( id )
    .then(movie => {
        res.render('movies/movieDetail', {movie})
        console.log(movie);
    })
    .catch(error => next(error));
})

module.exports = movieRoutes;
