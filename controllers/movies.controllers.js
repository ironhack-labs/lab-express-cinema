const movies = require('../models/Movie.model');

module.exports.list = (req, res, next) => {
    movies
    .find()
    .then(movies => res.render('movies', { movies }))
    .catch((error) => console.log(error))
}