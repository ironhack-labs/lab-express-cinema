const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.get("/", (req, res, next) => {
    Movie.find()
        .then(moviesList => {
            res.render("movies", { movies: moviesList });
        })
        .catch();
});

router.get("/:movieId", (req, res, next) => {
    Movie.findById(req.params.movieId)
        .then(moviesDetails => {
            res.render("movie-details", { movie: moviesDetails });
        })
        .catch();
});


module.exports = router;