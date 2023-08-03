const express = require('express')
const router = express.Router()

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.get('/movies', (req, res) => {
	Movie.find()
		.then(moviesFromDB => res.render('movies', { movies: moviesFromDB }))
		.catch(error => console.log('There was an error while retreiving the movies', error))
})

router.get('/movie/:id', (req, res) => {
	Movie.findById(req.params.id)
		.then(movie => res.render('movie-details', movie))
		.catch(error => console.log('There was an error while retreiving the movie', error))
})

module.exports = router
