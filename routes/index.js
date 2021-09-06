const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//ruta de /movies | dif. use & get?
router.get('/movies', (req, res) => {
	Movie.find()
		//.count()
		.then((movies) => {
			//console.log('Movies from DB:', JSON.stringify(movies));
			//console.log('Movies from DB:', movies);
			//console.log('Lenght of movies from the DB', movies);
			res.render('movies', { movies });
			//res.send(JSON.stringify(movies));
		})
		.catch((err) => {
			console.log(err);
		});
});

//ruta de /movies en detalle con id
router.get('/details/:movieId', (req, res) => {
	const { movieId } = req.params;

	Movie.findById(movieId)
		.then((movie) => {
			res.render('details', movie);
		})
		.catch((err) => console.log('ERROR', err));
});

module.exports = router;
