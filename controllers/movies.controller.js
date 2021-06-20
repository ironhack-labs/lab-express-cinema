const Movie = require("../models/Movie.model")

module.exports.home = (req, res, next) => {
    res.render("index")
}

module.exports.listFilms = (req, res, next) => {
    Movie.find()
        .then((movies => {
            console.log(movies)
            res.render("movies", { movies: movies})
        }))
        .catch(e => console.error(e))
}

module.exports.showMovie = (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movie) => {
            res.render("detail", {movie: movie})
        })
        .catch(e => console.error(e))
}