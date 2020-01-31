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

module.exports = router;
