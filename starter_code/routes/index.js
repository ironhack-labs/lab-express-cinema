const express = require("express");
const router = express.Router();
const movies = require("../bin/seeds");
const moviesModelI = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/Movies", (req, res) => {
  moviesModelI.find({}).then(dbRes => {
    console.log("All movies are on line");
    console.log(dbRes);
    res.render("movies", { movies: dbRes });
  });
});

router.get("/Movies/:id", (req, res) => {
  moviesModelI.findById({ _id: req.params.id }).then(dbRes => {
    res.render("details", { movie: dbRes });
  });
});

// moviesModel
//   .insertMany(movies)
//   .then(res => console.log("toto"))
//   .catch(err => console.log("nopety nope"));

module.exports = router;
