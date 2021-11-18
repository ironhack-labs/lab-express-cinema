const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res, next) => {
  const { ...movies } = await Movie.find().catch((e) => console.error(e));
  res.render("movies", { movies });
});

router.get("/movies/more:_id", async (req, res, next) => {
  const { ...movie } = await Movie.findById(req.params._id).catch((e) =>
    console.error(e)
  );
  res.render("details", { movie });
});

module.exports = router;
