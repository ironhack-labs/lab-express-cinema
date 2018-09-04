const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get("/movies", (req, res, next) => {
  // Find movies
  Movie.find()
    .then(movieResults => {
      // Render hbs with movie results
      res.locals.movieArray = movieResults;
      res.render("movies-page.hbs");
    })
    // "next()" means show the error page
    .catch(err => next(err))
});

router.get("/movies/:movieId", (req, res, next) => {
  // Get the ID from the URL
  const { movieId } = req.params;

  Movie.findById(movieId)
  .then(movieDoc => {
    // Send the database result (1) to the template as "movieItem"
    res.locals.movieItem = movieDoc;
    res.render("movie-details.hbs");
  })
  .catch(err => next(err));
})

module.exports = router;
