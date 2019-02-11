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
  .then(movies => {
    // res.locals.allMovies = movies;
    console.log(movies)
    res.render("movies", {movies})
  })
  .catch(e=>res.send(e))
});

router.get("/movies/:id", (req, res) =>{
  Movie.findById(req.params.id)
  .then(movies => {
    // res.locals.detail = movies;
    res.render("detail.hbs", movies);
  })
  .catch(e=>res.send(e))
});

module.exports = router;
