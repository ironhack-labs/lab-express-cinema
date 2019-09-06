const express = require('express');
const router = express.Router();
const { getIndex, getMovies, getMovieDetails } = require('./../controllers/index.controller');

/* GET home page */
router.get('/', getIndex);
router.get('/movies', getMovies);
router.get('/movie/:id', getMovieDetails);

module.exports = router;
