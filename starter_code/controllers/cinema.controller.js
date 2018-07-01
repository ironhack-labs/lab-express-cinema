const mongoose = require('mongoose');
const Movie = require('../models/cinema.model');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.render('movies', {movies});
        })
        .catch(err => {
            next(err);
        });
}
