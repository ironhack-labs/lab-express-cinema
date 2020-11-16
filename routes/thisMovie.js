const express = require("express");
const { render } = require("../app");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */

router.get("/:id", (req, res) => {
  const movieId = req.params.id;
  console.log(movieId);

  Movie.findById(movieId).then((thisMovie) => {
    console.log(thisMovie);
    res.render("this-movie", { thisMovie });
  });
});
module.exports = router;
