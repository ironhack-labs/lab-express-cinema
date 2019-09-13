const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// const { router } = require('./index.js');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

router.get('/movies', async (req, res, next) => {
	const movieArr = await Movie.find({});
	console.log(movieArr);
	res.render('movies', movieArr);
});

module.exports = router;
