const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')
const mongoose = require('mongoose')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next)=>{
  Movie.find()
  .then(movieArray => {
    // res.locals.allMovies = movieArray;
    console.log(movieArray)
    res.render("movies", {movieArray})
  })
  .catch(e=>res.send(e))
});

router.get("/movie/:movieid", (req, res, next) =>{
  const {movieId} = req.params
  Movie.findById(movieId)
  .then(detalle => {
    res.locals.detail = detalle;
    res.render("detail.hbs");
  })
  .catch(e=>res.send(e))
});

module.exports = router;
