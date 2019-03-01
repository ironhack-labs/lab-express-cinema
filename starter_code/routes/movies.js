const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie')


router.get('/', (req, res, next) => {
  Movie.find()
    .then(data => {
      res.render('movies',{data})
    })
})

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      console.log(movie)
      res.render('movieInfo',{movie})
    })
})


module.exports = router;
