const Movies = require("../models/Movie.model")

module.exports.homePage = (req, res, next) => {
    res.render('index')
}

module.exports.showMovies = (req, res, next) => {
    Movies.find()
    .then((movies) => {
    res.render('movies', { movies: movies });
    })
    .catch(e => console.error(e))
}

module.exports.movieInformation = (req, res, next) => {
    Movies.findById(req.params.id)
    .then((movie) => res.render('information', { movie: movie }))
    .catch(e => console.error(e))
}