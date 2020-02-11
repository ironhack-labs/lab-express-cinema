const express = require('express')
const router = express.Router()
const Movie = require('./../models/Movie')


router.get('/:movieId', async(req, res, next) => {
    const {movieId} = req.params
    const movie = await Movie.find({_id: movieId})
    console.log(movie)
    res.render('movie', {movie})
  })


  module.exports = router;