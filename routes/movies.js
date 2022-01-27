const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get('../views/movies.hbs', (req, res, next) => {
    Movie.find()
    .then((moviesList) => {
        console.log("movies")
        res.render("movies", { movies: moviesList })
    })
})

module.exports = router;

