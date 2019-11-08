const express = require("express");
const router = express.Router();
const Movie = require("./../models/Movies");

// /* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("movies");
// });

module.exports = router;

router.get("/movies", (req, res) => {
  Movie.find().then(dbRes => {
    console.log(dbRes);
    res.render("movies", { movies: dbRes });
  });
});

router.get("/movies/:id", (req, res) => {
  Movie.findOne({ _id: req.params.id }).then(dbRes => {
    console.log(dbRes);
    res.render("movie", { movie: dbRes });
  });
});

// router.get("/artist/:id", (req, res) => {
//   artistModel
//     .findOne({ _id: req.params.id })
//     .populate("style")
//     .then(dbRes => {
//       console.log(dbRes);
//       res.render("artist", { artist: dbRes, css: ["artists"] });
//     });
// });

module.exports = router;
