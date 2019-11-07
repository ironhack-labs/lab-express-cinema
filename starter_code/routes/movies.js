const express = require("express");
const router = express.Router();

const movieModel = require("./../models/Movie");

router.get("/", (req, res) => {
  movieModel.find().then(dbRes => {
    res.render("movies", { title: "Ironhack Cinema", movies: dbRes });
  });
});

router.get("/:id", (req, res) => {
  movieModel.findOne({ _id: req.params.id }).then(dbRes => {
    res.render("movie", { movie: dbRes });
  });
});

module.exports = router;
