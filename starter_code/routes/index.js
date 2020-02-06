const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/Movie', (req, res, next) => {
  Movie.find().then(allMovies => {
    res.render('movie', {
      allMovies
    });
  });
});


module.exports = router;


