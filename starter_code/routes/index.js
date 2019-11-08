const express = require("express");
const router = express.Router();
const moviesModel = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Cinema Ironhack"
  });
});

router.get("/movies", (req, res) => {
  moviesModel
    .find()
    .then(dbRes => {
      res.render("movies", {
        title: "Ironhack Cinema",
        movies: dbRes
      });
    })
    .catch(err => console.log(err));
});

router.get("/movie/:id", (req, res) => {
  moviesModel.findOne({ _id: req.params.id }).then(dbRes => {
    console.log(dbRes);
    res.render("movie", { movie: dbRes, css: ["artists"] });
  });
});

module.exports = router;
