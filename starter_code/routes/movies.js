const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("/movies", (req, res, next) => {
    Movie.find()
        .then(allMoviesFromDB => {
            res.render("movies", { movies: allMoviesFromDB });
        })
        .catch(error => {
            console.log("Error while getting the movies from the DB: ", error);
        });
});

module.exports = router;
