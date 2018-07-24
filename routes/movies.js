const express = require('express');
const router = express.Router();
const Movie = require('../bin/models/movie');

/* GET movies list */
router.get('/', function(req, res, next) {
  Movie.find()
    .then((movies) => {
      res.render('movies/list',{ movies });
    })
    .catch(error =>{
      console.log('error', error);
    })
});

/* GET a movie info */

router.get('/:id',function(req, res, next){
  const {id} = req.params;
  Movie.findById(id)
  .then(movie =>{
    res.render('movies/detail', movie);
  })
  .catch(error =>{
    next(error);
  })
})