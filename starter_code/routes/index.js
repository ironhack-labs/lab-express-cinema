const express = require('express');
const router = express.Router();
const movieModel = require('../models/Movie');

//require('./../bin/seeds');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

// lien vers la page movies
router.get('/movies', (req, res) => {
	movieModel
		.find({})
		.then((movies) => {
			console.log(movies);

			res.render('movies.hbs', { movies });
		})
		.catch((err) => {
			res.render();
		});
});

// lien vers les infos de chaque film
router.get('/movie/:id', (req, res) => {
	movieModel.findById(req.params.id).then((movie) => {
		console.log(movie);
		res.render('movieDetails', { movie });
	});
});

module.exports = router;
