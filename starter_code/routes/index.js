const express = require("express");
const router = express.Router();
const { findMovie, findOneMovie } = require("../controllers/movie.controllers");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/movies", findMovie);
router.get("/movies/:id", findOneMovie);
module.exports = router;

/* GET home page */
