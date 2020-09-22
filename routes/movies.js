const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/", async (req, res) => {
  //* if you keep  the arguments movies here, remove it in the app.js, and vice-versa

  const Movies = await Movie.find();
  res.render("movies.hbs", {Movies});
});

module.exports = router;
