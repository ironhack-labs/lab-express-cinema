const Movie = require("../models/Movie.model")

module.exports.listFilms = (req, res, next) => {
    Movie.find()
        .then((movies => {
            console.log(movies)
            res.render("movies", { movies: movies})
        }))
        .catch(e => console.error(e))
}

module.exports.home = (req, res, next) => {
    res.render("index")
}