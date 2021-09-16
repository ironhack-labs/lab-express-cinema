const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");
// In which route are we in? -> /movies

/* GET home page */
//movie//movie = /
router.get("/", (req, res, next) => {
  console.log("Anna went here");

  // We need to call the db (the db may fail)

  // Query the DB
  // -> We have the data

  // Every time we query the database, is it SYNC OR ASYNC???? ALWAYS ASYNC, IT MEANS THAT SEND DATA TO THE DATABASE AND USE .THEN AND .CATCH
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

//route of /movies with id
router.get("/details/:movieId", (req, res) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      res.render("details", movie);
    })
    .catch((err) => console.log("ERROR", err));
});

module.exports = router;
