const router = require('express').Router();
const miscController = require('../controllers/misc.controller');
const moviesController = require('../controllers/movies.controllers');

router.get('/', miscController.getHome);

// Cities
router.get('/movies', moviesController.getMovies);
router.get('/movies/:id', moviesController.getMovieDetail);

module.exports = router;