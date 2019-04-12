const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

router.get('/', (req,res, next)=> {
  Movie.findById(req.params.movieId)
  .then( data => {
    console.log(data);
    res.render('movie', data);
  })
  .catch((err)=>{
    console.log(err);
  }); 
});

module.exports = router;