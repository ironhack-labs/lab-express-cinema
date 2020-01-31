const express = require('express');
const router = express.Router();
const movieModel = require("../models/Movie.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;


router.get("/movies", (req, res) => {
  movieModel
    .find()
    .then(movies => {
      res.render("movies", {
        movies
      })
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    })
});


router.get("/movie/:id", (req, res) => {
  // console.log(req.params.id);
  movieModel
    .findById(req.params.id)
    .then(movies => {
      res.render("details", { movies });
    })
    .catch(dbErr => console.error("OH no, db err :", dbErr));
});