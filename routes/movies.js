const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.model");

/* GET movies list hbs */
router.get("/", (req, res, next) => {
	Movie.find()
		.then((allMovies) => {
			res.render("movies", { movies: allMovies });
		})
		.catch((err) => {
			console.log(err);
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
