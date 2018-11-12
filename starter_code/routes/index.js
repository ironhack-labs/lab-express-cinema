const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie.js");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) => {
  Movie.find()
  .then(movieResults => {
    res.locals.movieArray = movieResults
    res.render("movies.hbs");
  })
  .catch(err => next(err)
  );
})

router.get("/movies/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
  .then(movieDoc => {
 //   res.send(movieId);
    res.locals.movieItem = movieDoc;
    res.render("movie-details.hbs")
  })
  .catch(err => next(err));
});

module.exports = router;
