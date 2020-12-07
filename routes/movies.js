const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model");

/* GET movies page */
router.get("/", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();

    res.render("movies", { movies });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const movie = await MovieModel.findById(req.params.id);

    res.render("movie", { movie });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
