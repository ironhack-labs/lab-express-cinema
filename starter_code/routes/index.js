const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  Movie.find({})
    .then((dbSuccess) => {
      console.log(dbSuccess);
      res.render("movies", {
        myMovies: dbSuccess,
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((dbSuccess) => {
      res.render("show", {
        myMovie: dbSuccess,
      })
      console.log(dbSuccess)
    })
    .catch((err) => {
      console.log(err)
    })
});

module.exports = router;