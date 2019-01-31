const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res) => {
  Movie.find()
    .then(movies => {
      console.log(movies)
      res.render("movies", { Movie })
    })
    .catch(() => {
      (console.error('Error connecting to mongo', err))
    })
});

module.exports = router;
