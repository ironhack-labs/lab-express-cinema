const express = require("express");
const router = express.Router();
const Movie = require('../models/Movies.js');


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// GET movies page
router.get("/movies", (req, res, next) => {
  Movie.find()
    // .sort({
    //   title: 1
    // })
    .then(moviesResults => {
      res.locals.moviesArray = moviesResults
      console.log(moviesResults)
      res.render('movies.hbs')
    })
    .catch(err => next(err));
});

// Netflix style of address - PATH PARAMS
router.get("/movie/:movieId", (req, res, next) => {
  // res.send(req.params);
  const {
    movieId
  } = req.params;

  Movie.findById(movieId)
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.render('movie-details.hbs');
    })
    .catch(err => next(err))
})

module.exports = router;