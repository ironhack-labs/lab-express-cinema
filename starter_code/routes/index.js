const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie"); // Import of the model Movie from './models/Movie'

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  Movie.find({})
    .then(movies => {
      // db response contains a array of objects containing all the movies
      res.render("movies", { movies }); // render movies page and pass it the db response
    })
    .catch(err => {
      res.render("movies", { err: "an error occured" });
    });
});

router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("moviesDetails", { movie });
      console.log(req.params);
    })
    .catch(dbErr => {
      console.log("deb res not ok", dbErr);
    });
});

module.exports = router;
