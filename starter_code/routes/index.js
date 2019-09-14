const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// const { router } = require('./index.js');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

router.get('/movies', (req, res, next) => {
	Movie.find({})
		.then((allTheMoviesFromTheDB) => {
			//found all the movies in the database
			res.render('movies.hbs', { moviesToHBS: allTheMoviesFromTheDB }); //redner
		})
		.catch((err) => console.error(err));
});

router.get('/info/:id', async (req, res, next) => {
	let id = req.params.id;
	let movie = await Movie.findById(id);
	res.render('movie', { movie });
});

module.exports = router;
