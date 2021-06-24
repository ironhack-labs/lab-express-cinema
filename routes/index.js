const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
	Movie.find()
		.then((movies) => res.render('movies', { movies }))
		.catch((err) => console.log(err));
});

router.get('/movies/movie/:movieId', (req, res, next) => {
	Movie.findById(req.params.movieId)
		.then((movie) => res.render('movie', movie))
		.catch((err) => console.log(err));
});

module.exports = router;
