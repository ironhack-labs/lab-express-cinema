const express = require('express');
const router = express.Router();

const MovieController = require('../controller/Movie.controller');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', MovieController.getAllMovies)
router.get('/movie/:movieId', MovieController.getInfoMovieById)

module.exports = router;
