const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find({}).then(movies => {
    //res.send(movies);
    res.render("movies.hbs", { moviesList: movies });
  });
});

router.get("/movie/:id", (req, res, next) => {
  //console.log("THIS CONSOLE LOG HERE", req.params.id);
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movieCard.hbs", movie);
    })
    .catch(err => console.error(err));
});

module.exports = router;
