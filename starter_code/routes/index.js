const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET catalog films */

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(pelis => {
      res.render("movies", { pelis });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/movie/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(peli => {
      res.render("movie", { peli });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
