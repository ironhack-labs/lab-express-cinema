const express = require('express');
const router = express.Router();
const movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index.hbs');
});

router.get('/movies', (req, res, next) => {
	movie
		.find()
		.then((dbResult) => {
			res.render('movies.hbs', {
				movies: dbResult
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/:id', (req, res, next) => {
	movie
		.findById(req.params.id)
		.then((dbResult) => {
			res.render('oneMovie.hbs', {
				movie: dbResult
			});
		})
		.catch((err) => {
			res.render('not-found.hbs', {
				message: err.message
			});
		});
});

module.exports = router;
