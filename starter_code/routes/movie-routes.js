const express = require('express');
const router  = express.Router();
const Movie   = require("../models/movieSchema") 


router.get('/', (req, res, next) => {
  Movie.find()
  .then((stuffIGetBackFromDB)=>{
    res.render("movies-list",{movies: stuffIGetBackFromDB})
  })
  .catch((err) => {
    next(err);
    })
  res.render('movies-list');
});

router.get("/movies/:theID", (req,res,next)=>{
  Movie.findById(req.params.theID)
    .then((theThingIGetBackFromID) => {
      res.render('movie-details', { theMovie: theThingIGetBackFromDB })
    })
    .catch((err) => {
      next(err);
    })
})

module.exports = router;
