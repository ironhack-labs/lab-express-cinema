const router = require("express").Router();
const { Movie } = require("../models/Movie.model");

router.get("/", async (req, res) => {
  console.log("test");
  const movies = await Movie.find();
  res.render("movies", { movies });
});

module.exports = router;
