const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies',(req,res)=>{
  Movie.find().then((movies)=>{
    res.render('movies',{moviesArray:movies})
  })
})

router.get('/movies/:movieId',(req,res)=>{
  Movie.findOne({_id:req.params.movieId}).then((movie)=>{
    res.render('description',{movie})
  })
})

module.exports = router;
