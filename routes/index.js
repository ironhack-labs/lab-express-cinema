const express = require("express");
const MovieModel = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  MovieModel.find()
    .then((dbRes) => res.render("movies.hbs", { movies: dbRes }))
    .catch((err) => console.error(err));
});

router.get("/movies/:id", (req, res) => {
  MovieModel.findById(req.params.id)
    .then((movie) => {
        console.log(movie)
        res.render("movie.hbs", { movie })
    })
    .catch((dbErr) => console.error(dbErr));
});

module.exports = router;
