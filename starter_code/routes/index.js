const express = require('express');
const router  = express.Router();

const Movies = require("../models/Movie.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find()
    .then (moviesResults => {
      res.locals.moviesArray = moviesResults;
      res.render('movies.hbs');
    })
    .catch(err => next(err));
});

// find "/book/:bookId" in the book-list.hbs
router.get("/movies/:moviesId", (req, res, next) => {
  // get the ID from the URL (it's inside the "req.params" object)
  const { moviesId } = req.params;
  Movies.findById(moviesId)
    .then( data => {
      res.locals.movieItem = data;
      res.render("movie-details.hbs")
    })
    .catch(err => next(err))
});

module.exports = router;