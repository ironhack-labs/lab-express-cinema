const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(data => {
      //return res.send(data);
      res.render("movies.hbs", {
        moviesList: data
      });
    })
    .catch(err => next(err));
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(data => {
      //res.send(data);
      res.render("info.hbs", data);
    })
    .catch(err => next(err));
});

module.exports = router;
