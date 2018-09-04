const express = require('express');

const Movie = require("../models/movie.js")

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) => {
  // find movies
  Movie.find()
  .then(movieResults => {
    res.locals.movieArray = movieResults;
    res.render("movies.hbs");
    // render hbs with book results
  })
  // "next()" means show the error page
  .catch(err => next(err));
});


// Link to this page: /book/999
router.get("/movie/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
  .then(movieDoc => {
    // send the database result (1) to the template as "movieItem"
    res.locals.movieItem = movieDoc;
    
    res.render("movie-details.hbs");
  })
  .catch(err => next(err));
});


module.exports = router;
