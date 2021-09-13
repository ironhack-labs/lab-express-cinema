const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.model.js");

/* GET movies list hbs */
router.get("/movies", (req, res, next) => {
	Movie.find({})
		.then((allMovies) => {
			res.render("movies", { theMovies: allMovies });
		})
		.catch((error) => {
			next(error);
		});
});
// router.get("/:id", (req, re, next) => {
//   modelMovie
//     .findById(req.params.id)
//     .then((idMovie) => {
//       res.render("movie-card", { oneMovie: idMovie });
//     })
//     .catch();
// });

module.exports = router;
