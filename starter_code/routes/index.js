const express = require("express");
const router = express.Router();
const movieModel = require("./../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  movieModel
    .find()
    .then(movies => {
      res.render("movies", {
        movies
      });
    })
    .catch(dbErr => {
      console.log("Error when trying to get the movies from database", dbErr);
    });
});

router.get("/movies/:id", (req, res) => {
  movieModel
    .findById(req.params.id)
    .then(movie => {
      res.render("movie-detailled", { movie });
    })
    .catch(dbErr => console.error("OH no, db err :", dbErr));
});

module.exports = router;
