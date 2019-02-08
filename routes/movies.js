const router = require('express').Router()
const Movie = require('../models/Movie');

router.get('/', (req, res)=>{
	Movie.find()
			.then(movies=>{
				res.render('movies', {movies})
			})
			.catch(e=>{
				console.log(e)
				res.render('error')
			})
})

router.get('/:id', (req, res)=>{
	console.log(req.params.id)
	Movie.findById(req.params.id)
			.then(movie => {
				console.log(movie)
				res.render('movie-card', movie)
			})
			.catch(e=> {
				console.log(e)
				res.render('error')
			})
})

module.exports = router