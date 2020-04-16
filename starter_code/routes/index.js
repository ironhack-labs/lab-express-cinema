const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

/* GET Movie page */

router.get('/movie', (req, res, next) => {
	Movie.find()
		.then((debResponse) => {
			res.render('movies', {
				movies: debResponse
			});
		})
		.catch((error) => console.log(error));
});

router.get('/movie/:id', (req, res) => {
	Movie.findById(req.params.id)
		.then((debResponse) => {
			res.render('movies-info', {
				movies: debResponse
			});
		})
		.catch((error) => console.log(error));
});

module.exports = router;
