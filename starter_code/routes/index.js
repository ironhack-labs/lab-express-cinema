const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  Movie.find()
    .then(movies => {
      // console.log(movies);
      res.render("movies.hbs", { movieList: movies });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/movies/:id", (req, res) => {
  console.log(req.params);
  const movieId = req.params.id;

  Movie.findById(movieId).then(movie => {
    res.render("movieDetails.hbs", { thisMovie: movie });
  });
});

module.exports = router;
