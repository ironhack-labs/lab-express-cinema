const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  Movie.find({}).then((dbResult) => {
    res.render("movies.hbs", {
      movies: dbResult,
    });
  });
});

router.get("/movie/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((dbResult) => {
      res.render("oneMovie.hbs", {
        movie: dbResult,
      });
    })
    .catch((err) => {
      res.render("not-found.hbs", {
        message: err.message,
      });
    });
});

module.exports = router;
