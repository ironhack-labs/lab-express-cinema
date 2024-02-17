const Movie = require('../models/movie.model');

module.exports.home = (req, res, next) => {
    res.render('index');
}

module.exports.list = (req, res, next) => {
    Movie.find()
    .then((movies) => res.render('movies', { movies }))
    .catch((error) => next(error))
}