const express = require('express');
const router  = express.Router();
const modelMovie = require("../models/movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) => {
  console.log("Hello i'm on the movies route")
  modelMovie.find({})
    .then((dbResult) => {
   
      res.render("movies.hbs", {
        movies: dbResult,
      });
    })
    .catch((err) => {
      res.render("error.hbs")
   });
});

router.get("/:id", (req, res) => {
  modelMovie.findById(req.params.id)
    .then((dbResult) => {
      res.render("movies.hbs", {
        modelMovie: dbResult,
      });
    })
    .catch((err) => {
      res.render("error.hbs", {
        message: err.message,
      });
    });
});

module.exports = router;
