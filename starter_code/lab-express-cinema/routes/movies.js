const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

router.get('/', (req, res, next) => {
    Movie.find()
    .then(movies =>{
      res.render('movies', {movies})
    })
    .catch()
  });

  router.get('/:id',(req, res)=>{
    const {id} = req.params
    Movie.findById(id)
    .then(movie =>{
      res.render("movies-detail", movie)
    })
    .catch()
  })


module.exports = router;