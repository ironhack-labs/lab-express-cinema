const express = require('express')
const routers  = express.Router()
const Movie = require('../models/Movie')

/* GET home page */
routers.get('/', (req, res, next) => {
    res.render('index')
})

routers.get('/movies', (req, res, next) => {
  Movie.find()
  .then( movies => {
    res.render('movies',{movies})
    
  })
  .catch( error => {
    res.render('movies')
  })
})

routers.get('/movie/:id', (req,res) => {
  const {id} = req.params
  Movie.findById(id)
  .then( movie => {
    console.log(movie)
    res.render('movie',movie)
  })
  .catch( err => {
    console.log(err)
  })
})

module.exports = routers
