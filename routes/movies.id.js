const express = require("express");
const router = express.Router();

const movie = require("../models/Movie.model");

router.get("/movies/:movieID",

	async(req. res, next) => {
		console.log('single movie route');

		const {movieID} = req.params
		console.log(movieID);

		const myMovie = awat movie.findById(movieID).exec()

		res.render('movies-details', {
			movie: myMovie
		})

	})

	module.exports = router;