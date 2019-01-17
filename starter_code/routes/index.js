const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) =>{
  Movie.find()
  .then(movie =>{
    res.render("movies", {movie})
  })
})

router.get("/movies/:id", (req, res) =>{
    let movieId = req.params.id;
    console.log(movieId);
    Movie.findOne({"_id": movieId})
    .then((movie) =>{
      res.render("movie-details", {movie})
    })
    .catch((err) =>{
      console.log(err);
    })
})
module.exports = router;
