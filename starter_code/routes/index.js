const express = require("express");
const router = express.Router();
const movie = require("../models/Movie");
const movieArr = require("../bin/seeds")



/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  //no estoy seguro de que sea la forma correcta
  movie.collection.drop()
  movie.create(movieArr).then(movies => {
    res.render("movies", { movies });
  }).catch(e => console.log("error", e));
});

router.get("/movies/:id", (req, res) => {
  movie.find({ _id: req.params.id }).then(movie => {
    res.render("movieinfo", { movie: movie[0] });
  }).catch(e => console.log("error", e));;
});

module.exports = router;
