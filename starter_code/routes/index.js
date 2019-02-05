const express = require("express");
const Movie = require("../models/Movie.js");

const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  //Whenever a user visits "/books" find all the books sorted by rating
  Movie.find()
    .then(movieResults => {
      // Send the database query results to the HBS file as "BookArray"
      // res.json(data.body.items);
      res.locals.movieArray = movieResults;
      res.render("movies.hbs");
    })
    //Next(err) skips to the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

module.exports = router;
