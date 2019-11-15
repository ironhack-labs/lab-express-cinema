const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movies.find({})
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(err => console.log(err))
})

router.get("/movies/:id", (req, res, next) => {
  const movie = req.params.id
  Movies.find({ _id: movie })
    .then(movie => {

      res.render("movie", { movie });
    })
    .catch(err => console.log(err))
})

module.exports = router;
