const express = require ('express')
const router = express.Router()
const Movie = require(`../models/Movie`)


router.get(`/`, (req, res, next) =>{
  Movie.find()
  .then(movies=>{
    res.render('movies', {movies})
  })
  .catch(e=>next(e))
}) 

module.exports = router