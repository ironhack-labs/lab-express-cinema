const express = require('express');
const router  = express.Router();
const Movies = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", async (req, res) => {
  const movies = await Movies.find({});
  res.render("movies", { movies });
});

router.get("/movie/:_id", async (req, res) => {
  const { _id } = req.params;
  const movie = await Movies.findOne({ _id });
  res.render("movie", { movie });
});

module.exports = router;
