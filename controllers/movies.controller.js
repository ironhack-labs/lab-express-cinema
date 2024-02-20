const Movie = require('../models/Movie.model');

module.exports.index = (req, res, next) => res.render('misc/index');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then((movies) => res.render('misc/list', { movies }))
        .catch((error) => next(error));
}

module.exports.detail = (req, res, next) => {
const { id } = req.params;

    Movie.findById(id)
        .then((movie) => {
            if (!movie) {
                res.render('not-found')
            } else {
                console.debug(movie);
                res.render('misc/details', { movie })
            }
        })
        .catch((error) => next(error));
}