const express = require("express");
const MovieModel = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", function (req, res, next) {
  MovieModel.find()
    .then((dbresult) => {
      res.render("movies.hbs", { title: "movies list", movies: dbresult });
    })
    .catch((dbErr) => next(dbErr));
});

router.get("/movies/:id", function (req, res, next) {
  MovieModel.findById(req.params.id).then((movie) => {
    res.render("movie-details.hbs", {movie: movie});
  })
  .catch((dbErr) => next(dbErr));
});

module.exports = router;
