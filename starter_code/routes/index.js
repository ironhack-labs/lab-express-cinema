const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//GET ALL BOOKS
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movieDocuments => {
      res.render("movies.hbs", { movieList: movieDocuments });
    })
    .catch(err => {
      next(err);
    });
});

//DISPLAY A MOVIE
//DISPLAY A BOOK
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movieDetails.hbs", movie);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
