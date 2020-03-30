const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

/* GET Movies */
router.get('/movies', (req, res, next) => {
	Movie.find()
		.then((moviesFromMongoDB) => {
			console.log(moviesFromMongoDB);
			res.render('movies', {
				movies: moviesFromMongoDB
			});
		}) // closing .then
		.catch((error) => console.log(error));
});

/* GET by ID  */

router.get('/movies/:movieId', (req, res, next) => {
	Movie.findById(req.params.movieId)
		.then((theMovie) => {
			console.log(theMovie);
			res.render('movies-details', { movie: theMovie });
		}) // closing .then
		.catch((error) => console.log(error));
});

module.exports = router;
