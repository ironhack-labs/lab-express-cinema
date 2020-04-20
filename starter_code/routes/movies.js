// Iteration 3 | List the Movies

const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.js");

router.get("/movies", (req, res) => {
  //res.send("This is the movies.js");
  Movie.find()
    .then((movies) => {
      res.render("movies.hbs", { moviesList: movies });
    })
    .catch((err) => {
      console.log("Error by rendering the list of the movies ", err);
    });
});

// Iteration 4 | Display Movie Info
router.get("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId)
    .then((movie) => {
      // res.send(movie);
      res.render("movieDetails.hbs", { movieDetails: movie });
    })
    .catch((err) => {
      console.log("Error by finding the detailed movie ", err);
    });
});

module.exports = router;
