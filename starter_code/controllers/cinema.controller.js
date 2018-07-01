const mongoose = require('mongoose');
const Movie = require('../models/cinema.model');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.render('movies/index', {movies, title: 'Ironhack Movies' });
        })
        .catch(err => {
            next(err);
        });
};

module.exports.views = (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)
        .then(movie => {
            res.render('movies/movie', {movie, title: 'Movie Detail' });
        })
        .catch(err => {
            next(err);
        });
}
