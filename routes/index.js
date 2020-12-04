const express = require('express');
const router = express.Router();

const { getMovies, getMovie } = require('../controllers/movies.controllers')

/* GET home page */
router
    .get('/', (req, res, next) => res.render('index'));

// router
//     .get('/', getMovies)
//     .get('/:movieId', getMovie)

module.exports = router;
