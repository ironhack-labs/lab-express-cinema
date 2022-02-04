const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  //   console.log("buena");

  Movie.find().then((movies) => res.render("movies", { movies }));
});
module.exports = router;

// Book.find()
//   .select("title")
//   .then((books) => res.render("books/list", { books }))
//   .catch((err) => console.log(err));
