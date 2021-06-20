const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/Movies.controller');


/* GET home page */
router.get('/', moviesController.home);

router.get('/movies', moviesController.listMovies);

router.get('/movies/:id', moviesController.getMovie);


module.exports = router;

