const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movieDocuments => {
      res.render("movies.hbs", { movieList: movieDocuments });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/:id", (req, res, next) => {
  console.log("here: ", req.params.id);
  Movie.findOne({ title: req.params.id })
    .then(movieDetails => {
      console.log(movieDetails);
      res.render("movieDetails.hbs", movieDetails);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
