const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/movies", (req, res) => {
  //   res.send("this is the movie route");
  Movie.find().then((movies) => {
    // console.log(movies);
    res.render("movies", { movies });
  });
});

router.get("/movies/:id", (req, res) => {
  //   res.send(req.params.id);
  Movie.findById(req.params.id).then((movie) => {
    // res.send(movie);
    res.render("movie-details", { movie });
  });
});

module.exports = router;
