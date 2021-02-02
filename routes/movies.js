const express = require('express')
const router  = express.Router();
const Movie = require('../models/Movie.model')
const moviesController = require('../controllers/movies.controller')

router.get('/movies/:id', moviesController.movie)
router.get('/movies', moviesController.movies)

module.exports = router;