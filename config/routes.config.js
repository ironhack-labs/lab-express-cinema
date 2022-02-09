const express = require('express');
const router = express.Router();

const common = require('../controllers/common.controller');
const movie = require('../controllers/movies.controller')

// Home routes
router.get('/', common.home);

// Movies routes
router.get('/movies', movie.listMovies);
router.get('/movies/:id', movie.movieDetails);

module.exports = router;



