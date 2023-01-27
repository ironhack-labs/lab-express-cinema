const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', miscController.index);

/* GET movie page */
router.get('/movies', moviesController.list);
router.get('/movies/:movieId', moviesController.detail);

module.exports = router;
