const Movie = require ("../models/Movie.model");

module.exports.list = (req, res, next) => {
    Movie.find ()
        .then(movies => {
            res.render('movies', {movies})
        })
        .catch(error => console.log(error))
}

module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        console.log(movie)
        res.render("movie", movie)
    })
    .catch(error => console.log(error))
}



