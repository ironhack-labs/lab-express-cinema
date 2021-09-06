const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      //console.log("hola");
      res.render("movies", { movies });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
