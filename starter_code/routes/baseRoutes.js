const express = require("express");
const router = new express.Router();
const Movie = require("../models/Movies");

router.get("/", (request, res) => {
  res.render("index.hbs");
});

router.get("/movies", (req, res) => {
  Movie.find({})
    .then(dbResult => {
      console.log(dbResult);
      res.render("movies.hbs", {
        movies: dbResult
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get(".about", (req, res) => {
  res.render("about.hbs");
});

module.exports = router;
