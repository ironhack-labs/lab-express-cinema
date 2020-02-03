const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* Display Movies page */
router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(result => {
      res.render("movies.hbs", { moviesList: result });
    })
    .catch(err => {
      next(err);
    });
});

/* Display Movies ID route */
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(result => {
      console.log(result);
      res.render("movieCard.hbs", result);
      
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
