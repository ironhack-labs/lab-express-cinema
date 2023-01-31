const Movie = require('../models/movie.model');

module.exports.list = (req, res, next) => {
    Movie.find()
        .then((movies) => {
            console.log(movies);
            res.render('movies/list', { movies })
        })
        .catch((error) => next(error))
}