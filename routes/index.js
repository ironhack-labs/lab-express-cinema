const express = require('express');
const router = express.Router();
const miscController = require('../controllers/misc.controller')
const moviesController = require('../controllers/movies.controller')

/* GET home page */
router.get('/', miscController.index);

/* GET movie page */
router.get('/movies', moviesController.list);
router.get('/movies/:movieId', moviesController.detail);

module.exports = router;
