const express = require('express');
const router  = express.Router();
const mongoose = require("mongoose");
const Movies = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res)=>{
  Movies.find()
  .then(movies => res.render('movies', {movies}));
})

router.get('/movie/:id', (req,res)=>{
  let movie = req.params.id;

  Movies.find({_id: movie})
  .then(movie =>   {
    res.render('movie', {movie})
  });
})




module.exports = router;
