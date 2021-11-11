const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


// movies page

router.get('/movies', (req, res, next) => {
	Movie.find()
		.then(movies => {
			res.render('movies', {movies});
		});
});

router.get('/movies/:id', (req, res, next) =>{
	Movie.findById(req.params.id)
	.then(movieById => {
		console.log(movieById);
		return res.render('movie_details', movieById);
	});
});


module.exports = router;
