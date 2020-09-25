const express = require('express')
const router = express.Router()
const MovieModel = require('../models/Movie.model')

router.get('/', async(req, res, next) => {
	try {
		const movies = await MovieModel.find()
		res.render('movies', { movies, css:['movies'] })		
	} catch (error) {
		console.error(error)
	}

})

module.exports = router