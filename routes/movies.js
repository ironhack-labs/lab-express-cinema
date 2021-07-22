const express = require("express");
const movie - require("../models/Movie.model");
//const mongoose = require("mongoose");

const router = express.Router();

router.get("/movies", (req, res) => {
	console.log(req.query);


	movie.find(req.query)
	.then((movieDocuments) => {
		res.render("views/index.hbs", {
			movies: movieDocuments,
		});
	})
	.catch((error) => {
		console.log(error);
	});
});

module.exports = router;