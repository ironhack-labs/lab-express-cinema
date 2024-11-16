const Movie = require('../models/Movie.model');

exports.getMovies = (req, res, next) => {
    Movie.find()
    .then(movies => {
        res.render('movies', { movies })
    })
    .catch(err => console.error(err));
}

exports.detailMovie = (req, res, next) => {
    const {movieId} = req.params;
    Movie.findById(movieId)
    .then(movie => {
        res.render('detail', {movie})
    })
    .catch(err => next(err))
}
exports.deleteMovie = (req, res, next) => {
    const {movieId} = req.params;
    Movie.findByIdAndDelete(movieId)
    .then(movie => {
        res.render('movies', {movie})
    })
    .catch(err => next(err))
}
