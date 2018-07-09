const express = require("express");
const router = express.Router();
const Film = require("../models/Film");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Film.find({}).then(movies => {
    res.render("movies", { movies });
  });
});

router.get("/movies/:id", (req, res, next) => {
  Film.findById(req.params.id).then(movie => {
    res.render("singleMovie", { movie });
  });
});



module.exports = router;
