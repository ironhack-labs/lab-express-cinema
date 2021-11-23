// ./controllers/movieController.js
const Movie = require('./../models/movie.model');

exports.getAllMovies = async (req, res) => {
    const allMovies = await Movie.find({});

    res.render('movies', {
        data: allMovies,
    });
};

exports.getMovie = async (req, res) => {
    const singleMovieID = req.params.movieID;

    const getTheMovie = await Movie.findById(singleMovieID);

    res.render('details', {
        data: getTheMovie,
    });
};
