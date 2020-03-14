const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

//GET Movies
router.get('/movies', (req, res, next) => {
	Movie.find()
		.then((allTheMoviesFromDB) => {
			console.log('Retrieved movies from DB:', allTheMoviesFromDB);
			res.render('movies', { movies: allTheMoviesFromDB });
		})
		.catch((error) => {
			console.log('Error while getting the movies from the DB: ', error);
		})
});


router.get('/movies/:id', (req, res, next) => {
	Movie.findById(req.params.id)
		.then((theMovie) => {
			//console.log('The Movie I want to see is:', theMovie.title);
			res.render('movies-info', { movie: theMovie });
		})
		.catch((error) => {
			console.log('Error while getting the movies from the DB: ', error);
		})
});