const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

router.get('/', (req, res, next) => {
	Movie.find({})
		.then(allTheMovies => {
			console.log(Movie)
			res.render('movies', { movies: allTheMovies })
		})
		.catch(err => console.log('Hubo un error:', err))
})

module.exports = router
