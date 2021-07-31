const express = require("express");
const router = express.Router();

const Movie = require("../models/movies.model");

router.get("/movie/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      res.render("moviedetails", { movie: movie });
    })
    .catch((err) => console.log("Error while requesting a Movie", err));
});

module.exports = router;
