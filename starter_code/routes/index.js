const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movies.find().then(moviesFound => res.render("movies", { moviesFound }));
  // .then(moviesFound => res.json({moviesFound}));
});

router.get("/movies/:Id", (req, res, next) => {
  let { Id } = req.params;
  // console.log(Id)
  // Movies.findById(Id).then(movieFound => res.json(movieFound));
  Movies.findById(Id).then(movieFound =>
    res.render("movieDetail", { movieFound })
  );
  // .then(moviesFound => res.json({moviesFound}));
});
module.exports = router;
