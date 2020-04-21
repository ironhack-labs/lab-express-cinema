const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* router.get("/movies", (req, res, next) => {
    //res.render("movies");
    Movie.find().then((movies) => {
      console.log(movies);
      res.render("movies", { MovieList: movies });
    });
  });
   */

//router.get("/movies", (req, res, next) => {
//  res.render("movies");
//});

module.exports = router;
