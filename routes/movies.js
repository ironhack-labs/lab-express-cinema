const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/movies', (req, res, next) => {

	Movie.find()
		.then((movieList) => {
			res.render('movies.hbs', {
				movies: movieList
			});
		})

		.catch(e => console.log(e))
});


router.get('/movies/:id/seemore', (req, res, next) => {
	Movie.findById(req.params.id)
		.then((oneMovie) => {
			res.render('oneMovie.hbs', {
				movie: oneMovie
			})
		})

		.catch(e => console.log(e))
});




module.exports = router;
