const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')

/* GET home page */
router.get('/movies', (req, res, next) => {

  Movie.find()
  .then((theThingsWeGet)=>{
    console.log(theThingsWeGet)
    res.render('allMovies', {listOfMovies: theThingsWeGet});
  
  })
  .catch((err)=>{
    console.log(err)
  })

});


router.get('/movies/:movieID', (req, res, next) =>{

  Movie.findById(req.params.movieID)
  .then((theMovieWeGet)=>{
    console.log(theMovieWeGet);
    res.render('movieDetails', {theMovie: theMovieWeGet})
  })
  .catch((err)=>{
    console.log(err);
  })

})

module.exports = router;
