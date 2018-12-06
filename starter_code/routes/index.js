const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Cinema IronHack" });
});

router.get("/movies", (req, res, next) => {
  Movie.find({}, function(err, movies) {
    if (!err) {
      console.log(movies);
      res.render("movies", { movies });
    } else {
      throw err;
    }
  });
});

router.get("/movie/:id", (req, res, next) => {
  Movie.findById(req.params.id, function(err, movie) {
    console.log("id: ", req.params.id);
    if (!err) {
      console.log("one movie : ", movie);
      res.render("movie", movie);
    } else {
      throw err;
    }
  });
});

module.exports = router;
