const express = require("express");
const router = express.Router();

const Movie = require("./../models/Movie.model");

/* GET home page */
router.get("/", (req, res) => res.render("index"));

// Movies list

router.get("/movies", (req, res) => {
	Movie.find()
		.then((moviesFromDB) => {
			res.render("movies", { movies: moviesFromDB });
		})
		.catch((err) => console.log(err));
});

router.get("/movies/:id", (req, res) => {
	const { id } = req.params;

	Movie.findById(id)
		.then((movieFromDB) => {
			res.render("details", movieFromDB);
		})
		.catch((err) => console.log(err));
});

module.exports = router;
