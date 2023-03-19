const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

router.get('/', (req, res) => {
	Movie.find()
		.then((data) => res.render('movies/movies', { data }))
		.catch((err) => console.log(err));
});

router.get('/:movieId', (req, res) => {
	Movie.findById(req.params.movieId)
		.then((movie) => res.render('movies/movie', movie))
		.catch((err) => console.log(err));
});

module.exports = router;
