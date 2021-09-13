const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");

// In which route are we in? -> /movies

// /movies
router.get("/", (req, res, next) => {
  console.log("Anna went here");

  // We need to call the db (the db may fail)

  // Query the DB
  // -> We have the data

  // Every time we query the database, is it SYNC OR ASYNC????
  Movie.find()
    .then((resultFromTheDB) => {
      console.log(resultFromTheDB);
      res.render("movies", { movies: resultFromTheDB });
      // "You never pass an array, you always pass an object. Always." said André
    })
    .catch((err) => {
      console.log(err);
    });

  // mongoose doesn't need {} if you want to query the all the database
  // We display the data, movies.hbs
});

// /movies
router.get("/:id", (req, res, next) => {
  console.log(req.params.id);

  // We need to call the db (the db may fail)

  // Query the DB
  // -> We have the data

  // Every time we query the database, is it SYNC OR ASYNC????
  Movie.findById(req.params.id)
    .then((resultFromTheDB) => {
      res.render("movie-details", {
        movie: resultFromTheDB,
      });
    })
    .catch((err) => {
      console.log(err);
    });

  // mongoose doesn't need {} if you want to query the all the database
  // We display the data, movies.hbs
});

module.exports = router;
