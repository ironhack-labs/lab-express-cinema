const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie");
const movies = require("./../bin/seeds");

/* GET home page */
router.get("/", (req, res, next) => {
  const bodyClass = "index";
  res.render("index", { bodyClass });
});

router.get("/movies", (req, res) => {
  const moviePageTitle = "Ironhack Cinema";
  MovieModel.find({})
    .then(dbRes => {
      res.render("movies", { movie: dbRes, moviePageTitle });
    })
    .catch(err => {
      res.render("movies", { err: "an error occured" });
    });
});

pushMovies = data => {
  MovieModel.insertMany(data)
    .then(dbRes => {
      console.log("data successfully pushed", dbRes);
    })
    .catch(err => {
      console.log("Oups, an error ocured", err);
    });
};

router.get("/movie/:id", (req, res) => {
  MovieModel.findById(req.params.id)
    .then(dbRes => {
      res.render("movieDetails", { movie: dbRes });
    })
    .catch(dbErr => {
      console.log("dbRes not ok", dbErr);
    });
});

// pushMovies(movies);

module.exports = router;
