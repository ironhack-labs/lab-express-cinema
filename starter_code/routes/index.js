const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  Movies.find().then(movies => {
    // res.send(movies)
    res.render("movies", { movies });
  });
});

router.get("/movies/:movieId",(req,res)=>{
  Movies.findById(req.params.movieId).then(movie=>{
    res.render("movieDetails",{movie})
  })
})

module.exports = router;
