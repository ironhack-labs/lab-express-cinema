const express = require('express');
const app = express();
const router = express.Router();
const moviesController = require('../controllers/movies.controller')

/* GET home page */
router.get('/movies', moviesController.listMovies);
router.get('/movies/:id', moviesController.getMovie);
router.get('/', moviesController.index);

module.exports = router;
