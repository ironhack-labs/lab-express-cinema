const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movieResults => {
      //send the databse query results to the HBS file as book array
      res.locals.movieArray = movieResults;
      res.render("movies.hbs");
    })
    //next(err) skips to the error handler in "bin/www"
    //next allows you to skip to another piece of the error code (so its like "go too")
    .catch(err => next(err));
});

//Netflix style of addresses - PATH PARAMETERS
//http://localhost:555/book/8359274928h8db
router.get("/movie/:movieId", (req, res, next) => {
  // res.send(req.params);
  const { movieId } = req.params;
  //find the book in the database using the ID from the address below
  Movie.findById(movieId)
    .then(movieDoc => {
      console.log("findbyID !");
      res.locals.movieItem = movieDoc;
      res.render("movie-details.hbs");
    })
    // next(err) skips to the error handler in "bin/www" (error.hbs)
    .catch();
});

module.exports = router;
