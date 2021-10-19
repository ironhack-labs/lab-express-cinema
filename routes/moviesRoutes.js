const router = require("express").Router();
const Movie = require("../models/Movie.model");


router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((movieListFromDB) => {
            const data = {
                moviesList: movieListFromDB
            };
            res.render('movies/movies', data)
        })
        .catch((error) => {
            console.log('Error getting  movies from DB', error);
            next(error);
        });
})


router.get('/movies/:movieId', (req, res, next) => {
    Movie
        .findById(req.params.movieId)
        .then((singleMovieFromDB) => {
            res.render("movies/movie-details", singleMovieFromDB)
        })
        .catch((error) => {
            console.log("Error getting details for a movie from DB", error);
            next(error);
        })
})




module.exports = router;