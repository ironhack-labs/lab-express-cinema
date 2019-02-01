const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req,res) =>{
  Movie.find({},{image:1,title:1})
  .then(movies => res.render("movies",{movies}))
  .catch(err => {console.log(err)})
});

router.get("/movies/:id", (req,res) => {
  Movie.findById(req.params.id,{_id:0})
  .then(movie => res.render("movieDetails",{movie}))
  .catch(err => {console.log(err)})
});

module.exports = router;
