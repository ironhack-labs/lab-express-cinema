const express = require('express');

// call mongo stuff to use with queries
const mongoose = require("mongoose");
const Movie = require('../models/Movie.js');

const router = express.Router();

/*  # Home Page */
router.get('/', (req, res, next) => {

	// todo make hbs helper instead
	// https://stackoverflow.com/questions/31222495/conditional-class-for-html-using-pure-handlebars
	res.locals.bodyClass = 'home';

	res.render('index');
});


/* films #index  */
router.get('/movies', (req, res, next) => {
	Movie.find()
		.sort({
			title: -1
		})
		.then(queryResult => {

			res.locals.filmArray = queryResult;
			res.render('film-index');
		})
		// catch next(err) skip straight to error
		.catch(err => next(err));
});


/* films #show  */
router.get('/movie/:filmId', (req, res, next) => {

	const {
		filmId
	} = req.params;

	//	res.send("filmId is set to " + filmId);

	Movie.findById(filmId)
		.then(queryResult => {

			// console.log(queryResult)

			res.locals.filmItem = queryResult;
			res.render('film-show');
		})
		// catch next(err) skip straight to error
		.catch(err => next(err));
});


module.exports = router;