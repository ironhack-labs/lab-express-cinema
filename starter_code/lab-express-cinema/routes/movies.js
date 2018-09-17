const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

router.get('/', (req, res, next)=>{
  Movie.find()
  .then(movies=>{
    res.render('movies-list', {movies})
  })
  .catch(e=>{
    console.log(e)
    next(e)
  })
})

router.get('/movie-detail/:id', (req, res, next)=>{
  const {id} = req.params
  Movie.findById(id)
  .then(movies=>{
    res.render('movie-detail', movies)
  }).catch(e=>{
    console.log(e)
    next(e)
  })
})

module.exports = router