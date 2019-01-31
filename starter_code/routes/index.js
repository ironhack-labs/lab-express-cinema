const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index', { layout: false });
});

router.get('/movies', (req, res, next) => {
	Movie.find()
		.then((data) => {
			res.send('movies', { data });
		})
		.catch((error) => {
			console.log('error');
		});
});

module.exports = router;
