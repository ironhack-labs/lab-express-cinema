const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async (req, res, next)=>{
  const pelicula= await Movie.find({})
  //console.log(pelicula)
  res.render('movies', {pelicula})
})

router.get('/movies/:movieId', (req, res)=>{
  const idMovie = Movie.findById(req.params.movieId)
  console.log(idMovie)
  // .then(movie =>{
  //   res.render('movie', {movie})
  // })
  // .catch(err =>{
  //   console.log(err)
  // })
})

module.exports = router;
