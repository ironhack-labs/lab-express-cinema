const express = require('express');
const mongoose = require('mongoose');
const Movies = require('../models/Movies');
const seeds = require('../bin/seeds');

const router = express.Router();

/* GET home page */
router.get('/', (req, res) => {
	mongoose
		.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
		.then(async () => {
			const movies = await Movies.create(seeds);
			console.log(`${movies.length} created successfully`);
			mongoose.connection.close();
		})
		.catch((err) => console.log(err));

	res.render('index');
});

router.get('/movies', (req, res) => {
	mongoose
		.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
		.then(async () => {
			const movies = await Movies.find({}, { title: 1, image: 1 });
			res.render('movies', { movies });
			console.log(movies);
			mongoose.connection.close();
		})
		.catch((err) => console.log(err));
});

router.get('/movies/:movieId', (req, res) => {
	const { movieId } = req.params;
	mongoose
		.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
		.then(async () => {
			const movie = await Movies.findById(movieId);
			res.render('movie', movie);
			console.log(movie);
			mongoose.connection.close();
		})
		.catch((err) => console.log(err));
});

module.exports = router;
