const express = require('express');
const router = express.Router();

const Movies = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

router.get('/movies', async (req, res, next) => {
	try {
		let data = {};
		data.movies = await Movies.find().select('title image');
		res.render('movies', data);
	} catch (error) {
		console.log(error);
		next();
	}
});

router.get('/movies/:id', async (req, res, next) => {
	try {
		const movie = await Movies.findById(req.params.id);
		res.render('movieInfo', movie);
	} catch (error) {
		console.log(error);
		next();
	}
});

module.exports = router;
