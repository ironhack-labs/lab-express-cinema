const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movies.controller')

// rutas
/* GET home page */
router.get('/', movieController.index);

router.get('/movies', movieController.listMovies);

router.get('/movie/:id', movieController.movieInfo);

module.exports = router;
