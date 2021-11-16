const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/*movies*/
router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.render("movies", { movies });
  } catch (err) {
    console.log("err", err);
  }
});

router.get("/movie/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render("movie",movie);
});

module.exports = router;
