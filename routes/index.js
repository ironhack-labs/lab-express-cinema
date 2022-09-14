const express = require("express");
const router = express.Router();
const { Movie } = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res, next) => {
  const movies = await Movie.find();
  res.render("movies", { movies });
});

router.get("/movie/:id", async (req, res, next) => {
console.log(req.params.id);
console.log(req.query);

  const movie = await Movie.findById(req.params.id);
  res.render("movie", { movie });
});

module.exports = router;

// router.get("/:bookSlug", async (req, res) => {
//   const foundBook = await Book.findOne({ slug: req.params.bookSlug });
//   res.render("details", { book: foundBook });
// });
