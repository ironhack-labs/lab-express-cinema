const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')


/* GET movies page */
router.get('/movies', (req, res, next) => {

  Movie.find()
  .then((theStuffWeGotBack)=>{
    res.render('movies', {movies: theStuffWeGotBack});
  })

  .catch((err)=>{
  })
  
});

module.exports = router;
