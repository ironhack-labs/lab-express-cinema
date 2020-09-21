const express = require("express");
const router = new express.Router();
const movie = require("./../models/Movie.model");

router.get("/movies", async (req, res) => {
  try {
    const dbresult = await movie.find();
    res.render("movies", { movie: dbresult });
    console.log("toto");
  } catch (error) {
    next(error);
  }
});

router.get("/movie/:id", async (req, res) => {
  try {
    const dbresult = await movie.findById(req.params.id);
    res.render("movie", { movie: dbresult });
    console.log("toto");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
