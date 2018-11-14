const express = require('express');
const router  = express.Router();
const Movie = require("../models/MovieModel")

router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((listFromDB)=>{
      console.log("----------- ", listFromDB);
      res.render('movies', {movies: listFromDB})
    })
    .catch((err)=>{
      next(err);
    })
     
    })


router.get("/movies/:theID", (req,res,next)=>{
    Movie.findById(req.params.theID)
      .then((stuffFromDB)=>{
        res.render("movie-details", {theMovie: stuffFromDB})
      })
      .catch((err)=>{
        next(err);
      })

})

module.exports = router;
