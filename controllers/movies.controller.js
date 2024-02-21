const Movie = require('../models/Movie.model');
const mongoose = require('mongoose');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then((movies) => res.render('movies/list', { movies }))
        .catch((error) => console.error(error))
}

module.exports.details = (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movie) => res.render('movies/details', { movie }))
        .catch((error) => console.error(error))
}