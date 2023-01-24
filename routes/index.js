const express = require('express');
const router = express.Router();
const miscController = require('../controllers/misc.controller')
const moviesController = require('../controllers/movies.controller')


/* GET home page */
router.get('/', miscController.index);

/* GET movie page */
router.get('/movies', moviesController.movies);


module.exports = router;
