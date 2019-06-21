const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const dataMovies = require("./../bin/seeds");
const Movies = require("./../models/Movies.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

insertMyMovies = () => {
  Movies.insertMany(dataMovies)
    .then(res => console.log("yay"))
    .catch(err => console.log("nay"));
};

router.get("/movies", (req, res) => {
  const title = "Ironhack Cinema";
  const subtitle = "Click on the movie to check the showtimes!";
  Movies.find()

    .then(dbRes => {
      res.render("movies.hbs", { dbRes, title, subtitle }); // render page and pass it the db response
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/movies/:id", (req, res) => {
  Movies.findById(req.params.id)
    .then(dbRes => res.render("movieDetail.hbs", { dbRes }))
    .catch(dbErr => console.log(dbErr));
});

insertMyMovies(dataMovies);

module.exports = router;
