const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

router.get("/movies", async (req, res) => {
	try {
		const movies = await Movie.find();
		res.render("movies", { movies });
	} catch(error) {
		console.log(error);
	}
});

router.get("/movies/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const movie = await Movie.findById(id);
		res.render('movie-details', movie);
	} catch(error) {
		console.log(error);
	}
});

//!don't forget to export router
module.exports = router;
