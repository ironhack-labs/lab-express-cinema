const express = require('express');
const router  = express.Router();
const Movie = require('./../models/Movie')

/* GET home page */
router
  .get('/', (req, res, next) => {
    res.render('index');
  })
  .get('/movies', async (req, res) => {

    const movies = await Movie.find()
    //console.log(movies)

    res.render('movies', {movies})

  })
  .get('/movie/:movieId', async (req, res) => {
    const { movieId } = req.params
    const movie = await Movie.find({_id: movieId})
    //res.send(movie)
    console.log(movie)
    res.render('movie', {movie})
  })

module.exports = router;
