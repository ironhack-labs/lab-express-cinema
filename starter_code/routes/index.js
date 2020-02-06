const express = require('express');
const router  = express.Router();
const Movies = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//Show films
router.get("/movies", (req, res, next) => {
  Movies.find().then(moviesFound => res.render("movies", {moviesFound}));
});



router.get("/movies/:id", (req, res, next) => {
  let { id } = req.params;
  Movies.findById(id).then(filmFound =>
    res.render("film", { filmFound })
  );
});

module.exports = router;

