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