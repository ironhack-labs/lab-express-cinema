const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Cinema Ironhack" });
});

router.get("/movies", (req, res) => {
  Movie.find({})
    .then(movies => {
      console.log(movies);

      res.render("movies", {
        header: "Ironhack Cinema",
        subtitle: "Click on the movie to checkthe showtimes!",
        movies
      });
    })
    .catch(err => {
      throw err;
    });
});

router.get("/movie/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movieDetails", movie);
    })
    .catch(err => {
      throw err;
    });
});

module.exports = router;
