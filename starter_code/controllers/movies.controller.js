const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.render('movies/moviesIndex', {
                movies
            });
        })
        .catch(error => {console.error(`Error ${error}`)})
}

module.exports.detail = (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)
        .then(movie => {
             if(movie) {
                 res.render('movies/movieDetail', {
                     movie
                 })
             } else {
                next(createError(404, `Movie with id ${id} not found`));
             }
            })
        .catch(error => next(error))
}
