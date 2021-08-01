const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");
/* GET home page */
router.get("/movies", (req, res, next) => {
  Movie.find().then((result) => {
    console.log("results", result);
    res.render("movies.hbs", { listOfMovies: result });
    // res.send(result)
  });
});

module.exports = router;
