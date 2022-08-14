const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model");
const movies = require("../seeds/movies.seeds"); // call the seeds file into the routes file to get the movie database

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/*GET all movies page */

router.get("/movies", (req, res) => {
  res.render("movies", { movies });
});

/* GET the movie details page */
router.get("/movies/:id", (req, res) => {
  MovieModel.findById(req.params.id)
    .then((movie) => {
      const { title, director, starts, image, description, showTimes } = movie;
      res.render("movie-details", {
        title,
        director,
        starts,
        image,
        description,
        showTimes,
      });
    })
    .catch((err) => {
      console.log(`oopsie, there went something wrong with the id ${err}`);
    });
});

module.exports = router;
