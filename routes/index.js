const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', moviesController.getMovies);
router.get('/movies/:id', moviesController.getMovieDetail);

module.exports = router;
