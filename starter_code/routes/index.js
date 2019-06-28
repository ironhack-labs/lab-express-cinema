const express = require('express');
const router  = express.Router();
const { findMovies, findOneMovie } = require('../controllers/movies.controller')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', findMovies)

router.get('/movie/:id', findOneMovie)

module.exports = router;
