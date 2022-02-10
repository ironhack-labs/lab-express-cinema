const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

module.exports.listMovies = (req, res, next) => {
    Movie.find()
        .then(movies => {
            console.log(movies);
        res.render('movie/movies', {movies: movies})
    })
        .catch(err => console.log(err))
}


module.exports.movieDetails = (req, res, next) => {
    console.log(req.params);
    Movie.findById(req.params.id)
        .then(movie => { res.render('movie/movie-details', {movie: movie})

})
        .catch((err) => console.log(err));

}
