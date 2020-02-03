const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
console.log(Movie);
router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(data => {
      // we need to render in the `.then()` because that is WHEN the bookDocuments are accessible
      // res.send(data);
      res.render("movies.hbs", { moviesList: data });
    })
    .catch(err => {
      next(err);
    });
});
router.get("/movie/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieData => {
      // we need to render in the `.then()` because that is WHEN the bookDocuments are accessible
      //res.send(movieData);
      res.render("movie.hbs", movieData);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
