const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies/:id', (req, res, next) => {
  Movie.find().then((movies)=>{
  res.render("movies",{movies})
}).catch((err)=>{
    console.log(err)
  })
});



router.get('/movies/:id', (req, res, next) => {
  Movie.findOne({_id: req.params.id}).then(movie=>{
  res.render("movie", {movie})
}).catch((err)=>{
    console.log(err)
  })
});
module.exports = router;


