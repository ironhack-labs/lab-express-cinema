const express = require('express')
const req = require('express/lib/request')
const router = express.Router()
const Movies = require('../models/Movie.models')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.get('/movies', (req, res) => {
  Movies.find().then((allmovies) => {
    // console.log(allmovies)

    res.render('movies-page', { allmovies })
  })
})
router.get('/movie/:id', (req, res) => {
  Movies.findById(req.params.id).then((theMovie) => {
    //console.log(theMovie)

    res.render('movie-page', { theMovie })
  })
})
module.exports = router
