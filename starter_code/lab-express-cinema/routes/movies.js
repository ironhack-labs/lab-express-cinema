const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')


/* GET movies page */

  router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(movies => {
        console.log("+++++++++++++++++++++++++++++++++++" + movies)
        res.render('movies',{listOfMovies: movies});
      })
      .catch(error => {
        console.log(error)
      })
  });  

  
module.exports = router;
