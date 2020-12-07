const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Moviemodel");

/* GET movies page */
router.get("/", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();
    res.render("movies", { movies });
  } catch (err) {
    console.error(err);
    res.send("an error occured ... :/");
  }
});

/* GET one movie page */
router.get("/:id", async (req, res, next) => {
  try {
    const oneMovie = await MovieModel.findById(req.params.id);
    console.log(oneMovie);
    res.render("onemovie", { oneMovie });
  } catch (err) {
    console.error(err);
    res.send("an error occured ... :/");
  }
});

module.exports = router;
