const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie");

/* GET home page */
router.get('/', (req, res, next) => {
  //console.log('index')
  res.render('index');
});

router.get('/movies', async (req, res)=>{
  const pelicula= await Movie.find()
  console.log(pelicula)
  res.render('movies', {pelicula})
  //res.send(pelicula)
})

router.get('/movie/:movieId', async (req, res) =>{
  const {movieId} = req.params
  const movie = await Movie.find({_id: movieId})
  console.log(movie)
  res.render('movie', {movie})
})

module.exports = router;
