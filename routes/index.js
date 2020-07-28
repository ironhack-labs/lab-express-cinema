const express = require("express");
const router = express.Router();

const Cinema = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Cinema.find()
    .then((allMoviesFromDB) => {
      res.render("movies.hbs", { movie: allMoviesFromDB });
    })
    .catch(next);
});

router.get("/movies/:id", (req, res, next) => {
  let movie = req.params.id;
  Cinema.findOne({ _id: movie })
    .then((movie) => {
      console.log(movie);
      res.render("details", { movie: movie });
    })
    .catch(next);
});

module.exports = router;
