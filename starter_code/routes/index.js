const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies",(req,res,next)=>{
  res.render("movies");
});

router.get("/movies", (req, res, next) => {
  Movie.find().then(movies => {
    res.render('movies', {movies})
  }).catch((err) => {
    console.log(err)
  })
});

module.exports = router;
