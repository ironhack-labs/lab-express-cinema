const express = require("express");
const router = express.Router();
const { Movie } = require("../models/Movie.model");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.render("movies", { movies });
});

router.get("/", (req, res, next) => res.render("index"));
module.exports = router;
