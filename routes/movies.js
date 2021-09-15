/** @format */

const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET movies list hbs */
router.get("/", (req, res, next) => {
	Movie.find().then((allMovies) => {
		res.render("movies", { movies: allMovies });
	});
});

/*Movie details*/
router.get("/:id", (req, res, next) => {
	Movie.findById(req.params.id).then((movie) => {
		res.render("movie-card", { movieCard: movie });
	});
});

module.exports = router;
