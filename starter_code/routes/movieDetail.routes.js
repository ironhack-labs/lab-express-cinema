const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

router.get('/:id', (req, res, next) => {
	Movie.find({ _id: req.params.id })
		.then(oneMovie => {
			res.render('movie-detail', { movie: oneMovie })
		})
		.catch(err => console.log('Hubo un error:', err))
})

module.exports = router
