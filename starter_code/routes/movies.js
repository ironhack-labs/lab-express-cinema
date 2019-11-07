const express = require("express");
const router = express.Router();
const Movie = require("./../models/Movies");

module.exports = router;
router.get("/movies", (req, res) => {
  Movie.find().then(dbRes => {
    console.log(dbRes);
    res.render("movies", { movies: dbRes });
  });
});
router.get("/movies/:id", (req, res) => {
  Movie.findOne().then(dbRes => {
    console.log(dbRes);
    res.render("movies", { movies: dbRes });
  });
});
module.exports = router;
