const express = require('express');
const router = express.Router();
const MovieModel = require("./../models/Movie.models");

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { title: 'Home' }));

router.get("/movies", function (req, res, next) {
  // find all movies in db
  MovieModel.find()
    .then((dbResult) => {
      // send movies to the render func
      res.render("movies.hbs", { title: "Movies", movies: dbResult });
    })
    .catch((dbErr) => next(dbErr));
});

router.get("/movies/:id", function (req, res, next) {
  MovieModel.findById(req.params.id)
    .then((dbResult) => {
      res.render("movie.hbs", {
        title: dbResult.title,
        movie: dbResult,
      });
    })
    .catch((dbErr) => next(dbErr));
});

router.get("/movies/delete/:id", function (req, res, next) {
  MovieModel.findByIdAndDelete(req.params.id)
    .then((dbResult) => {
      res.redirect("/movies");
    })
    .catch((dbErr) => next(dbErr));
});

module.exports = router;
