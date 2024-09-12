const movieModel = require('../models/Movie.model');
const mongoose = require('mongoose');

module.exports.getMovies = (req, res, next) => {
    movieModel.find()
        .then((movies) => res.render('movies', { movies: movies }))
        .catch((error) => next(error));
}
module.exports.detail = (req, res, next) => {
    const { id } = req.params;

    movieModel.findById(id)
        .then((movie) => res.render('details', { movie}))
        .catch((error) => next(error))

}