const Movie = require('../model/movie.model');

module.exports.getHome = (req, res, next) => res.render('index');
module.exports.listMovies = (req, res, next) => {
    Movie.find()
        .then((moviesDb) => {
            res.render('movies/movies', {movies: moviesDb});
        })
        .catch((err) => console.log(err))
    
};
module.exports.getMovieDetails = (req, res, next) => {
    const {movieId} = req.params;
    Movie.findById(movieId)
        .then((movie) => {
            res.render('movies/movie-details', { movie });
        })
        .catch((err) => console.log(err))
    
};

