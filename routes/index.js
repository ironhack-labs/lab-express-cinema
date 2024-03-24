const express = require('express');
const router = express.Router();
const {
    listMovies,
    getHome,
    getMovieDetails
} = require('../controllers/movies.controller');

/* GET home page */
router.get('/', getHome);

//'/movies'
router.get('/movies', listMovies);

//'/movie/:id'
router.get('/movies/:movieId', getMovieDetails);

module.exports = router;
