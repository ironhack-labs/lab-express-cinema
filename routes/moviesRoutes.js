const router = require("express").Router();
const Movie = require("../models/Movie.model");


router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((listOfMovies) => {
            const data = {
                moviesList: listOfMovies
            };
            res.render('movies/movies', data)
        })
        .catch((error) => {
            console.log('An error occured, could not load movies list', error);
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