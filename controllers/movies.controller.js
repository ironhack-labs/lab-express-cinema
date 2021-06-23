
const Movie = require('../models/Movie.model');

module.exports.index = (req, res, next) => {
    res.render('index');
}

module.exports.listMovies = (req, res, next) => {
    Movie.find()
        .then((movies) => {
        res.render('movies', { movies: movies});
        })
        .catch(e => console.log(e))
    
}

module.exports.movieInfo = (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => res.render('movie', { movie: movie }))
    .catch(e => console.error(e))

}