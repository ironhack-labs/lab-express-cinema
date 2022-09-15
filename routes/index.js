const express = require("express");
const router = express.Router();
const { Movie } = require("../models/Movie.model");
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* GET movies page */
router.get("/movies", async (req, res, next) => {
    const movies = await Movie.find()
    console.log(movies);
    res.render("movies", { movies });
});

/* GET movie detail page */

router.get("/movies/:movieId", async (req, res, next) => {
    const movieId = await Movie.findOne({ movie: req.params.movieId })
    console.log(movieId);
    res.render("movie-details", { movieId: movieId });
});

module.exports = router;
