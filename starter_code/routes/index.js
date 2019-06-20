const express = require("express");
const router = express.Router();
const seeds = require("../bin/seeds");
const mongoose = require("mongoose");
const Movie = require("../models/Movie");

mongoose
  .connect("mongodb://localhost/movies", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// Movie.insertMany(seeds, function(err, docs) {
// console.log(err);
// });
/* GET home page */

router.get("/movies", (req, res) => {
  Movie.find()
    .then(seeds => {
      res.render("movies", { seeds });
    })
    .catch(err => {
      res.render({ err: "an error occured" });
    });
});

router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then(seeds => {
      res.render("details", { seeds });
    })
    .catch(dbErr => {
      console.log("deb res not ok", dberr);
    });
});

router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
