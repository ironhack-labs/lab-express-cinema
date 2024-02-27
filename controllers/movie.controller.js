const Movie = require('../models/movie.model');
const mongoose = require('mongoose');


module.exports.list = (req, res, next) => {
    Movie.find()    
        .then((movies) =>            
        res.render('movies', {movies}))
        .catch((error) => next(error))
}

module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movie) => res.render('movies/detail', {movie}))

}