const express = require("express");
const router = express.Router();
const movies = require("../seeds/movies.seed");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  res.render("movies", { movies });
});

module.exports = router;
