const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  Movies.find()
    .then(movies => {
      console.log("Estas son las pelis:", movies);
      res.render("movies", { movies });
    })
    .catch(err => console.log(err));
});

router.get("/movies/:id", (req, res) => {
  let { id } = req.params;
  Movies.findById(id)
    .then(movie => {
      res.render("movie-detail", { movie });
    })
    .catch(err => console.log(err));
});
module.exports = router;
