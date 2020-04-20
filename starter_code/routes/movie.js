const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("/movie/:movieId", (req, res, next) => {
    Movie.findById(req.params.movieId)
        .then(singleMovie => {
            res.render("movieDetails", { movie: singleMovie });
        })
        .catch(error => {
            console.log(
                "Error while getting the movie details from the DB: ",
                error
            );
        });
});

module.exports = router;
