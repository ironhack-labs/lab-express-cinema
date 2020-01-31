const express = require('express');
const router  = express.Router();
const Movie        = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/movies', async (req, res) => {
  const movies =  await Movie.find()
  //console.log(movies)
  res.render('movie-gallery', {movies})
})
router.get('/movies/:peliId',async (req,res)=>{
  const peliDetail =  await Movie.findById(req.params.peliId)
  console.log(peliDetail)
  res.render('movie-detail', peliDetail)
})

module.exports = router;
