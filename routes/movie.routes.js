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

//!don't forget to export router
module.exports = router;
