const express = require("express");
const Movie = require("../models/Movies.model");

const router = express.Router();

router.get("/movie/:id", (req, res) => {
  Movie.findById(req.params.id).then((fullfilledMovie) => {
    // console.log(fullfilledMovie);
    res.render("movie", { movie: fullfilledMovie });
  });
  console.log(req.params);
});

module.exports = router;
