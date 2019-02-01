const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

router.get('/movies', (req, res, next) => {
	Movie.find()
		.then((data) => {
			res.render('movies', { data });
		})
		.catch((error) => {
			console.log(error);
		});
});

router.get('/onemovie/:id', (req, res, next) => {
	console.log('hola');
	Movie.findById(req.params.id)
		.then((data) => {
			console.log(data);
			res.render('onemovie', { data });
		})
		.catch((error) => {
			console.log(error);
		});
});
module.exports = router;
