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
    const id = req.params._id;
    Movie.findOne(req.params.id)
        .then(movie => {
            if(movie) {
                res.render('movies/moviesDetail', {
                    movie
                })
            } else {
                next(error);
            }
            })
        .catch(next(error))
}
