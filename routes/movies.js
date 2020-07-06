const express = require("express");
const router = express.Router();
const movieModel = require("./../models/Movie.model.js");

router.get("/movies", (req, res) => {
  /* movieModel
    .find()
    .then((dbRes) => */
  res.render("movies");
});

module.exports = router;
