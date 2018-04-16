const express = require("express");
const Movie = require("../models/movie-model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET movies page */
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(moviesFromDb => {
      // res.send(booksFromDb);
      res.locals.movieList = moviesFromDb;
      res.render("movies");

      // can also be called this way:
      // res.render("books-page", {bookList: booksFromDb});
    })
    .catch(err => {
      // show the error page with this error
      next(err);
    });
});

router.get("/movie/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movieDetails => {
      res.locals.movie = movieDetails;
      res.render("about-movie");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
