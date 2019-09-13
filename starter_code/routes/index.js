const express = require('express');
const router  = express.Router();
const Movies = require("../models/Movies");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res) => {
    Movies.find({}).select({title: 1, image: 1})
    .then(movies => {
      console.log(movies)
      res.render("movies", {movies})
    })
    
  });
  app.get("/movie/:id", (req, res) => {
    Movies.findById(req.params.id).then(oneMovie => {
      res.render("movie-details", { oneMovie, host: process.env.HOST });
    });
  });
  
module.exports = router;
