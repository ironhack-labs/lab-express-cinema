const router = require("express").Router();
const { Movie } = require("../models/Movie.model");

router.get("/:movieId", async (req, res) => {
  console.log(req.params.movieId);
  const oneMovie = await Movie.findById(req.params.movieId);
  console.log(oneMovie);
  res.render("movie", { movie: oneMovie });
});

module.exports = router;
