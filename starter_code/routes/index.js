const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find({}).then(movie => {
    console.log(movie);
    console.log(movie[0]._id);

    res.render("movies.hbs", { moviesList: movie });
  });
});

router.get("/movies/:movieId", (req, res, next) => {
  console.log(req.params);
  Movie.findById(req.params.movieId)
    .then(movie => {
      res.render("movieDetails.hbs", movie);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
