const express = require('express');
const router  = express.Router();
const Movie = require('./../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
})
.get('/movies',async (req,res)=>{
  let movieArr= await Movie.find({})
  res.render('movies',{movieArr})
})
.get('/movie/:movieId',async (req,res)=>{
  const {movieId}=req.params
  let movieArr= await Movie.findById(movieId)
  //res.send(movieArr)
  res.render('movie',movieArr)
})

module.exports = router;
