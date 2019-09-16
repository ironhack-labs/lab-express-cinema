const express = require('express');
const router  = express.Router();
const Movie = require('../models/post')

/* GET home page */
router.get(' /', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res,next) =>{
  Movie.find({}).then(movies =>{
    res.render('movies', {movies})
  }).catch(err=>{
    console.log(err)
  })
})

module.exports = router;
