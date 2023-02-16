const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET movies page */
router.get('/movies', (req, res, next) => {
	Movie.find().then((allMovies) => {
		console.log('All movies from DB retrieved', allMovies);
		res.render('movies', { movies: allMovies });
	});
});

module.exports = router;
