const Movie = require('../models/movie.model');

 module.exports.list = (req, res, next) => {
    Movie.find()
        .then((movies) => res.render('movies/list', { movies }))
        .catch((error) => next(error));
}

module.exports.detail = (req, res, next) => {
    const {id} = req.params;
    Movie.findById(id)
        .then((movie) => res.render('movies/detail', { movie }))
        .catch((error) => next(error));
}