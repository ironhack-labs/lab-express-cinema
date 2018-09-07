const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')

/* GET home page */
router.get('/movies', (req, res, next) => {

  Movie.find()
  .then((movieData)=>{
      console.log('----------got the movies ---------')
      // console.log(movieData)
      res.render('movieList', {listOfMovies: movieData})
  })
  .catch((err)=>{
    console.log('----------No movies :( ---------')
  })
});

router.get('/movies/:theMovieID', (req, res, next)=>{

  Movie.findById(req.params.theMovieID)
  .then((theActualMovie)=>{
      console.log('----------got ONE movies ---------')
      console.log(theActualMovie)
      res.render('details', {theMovie: theActualMovie})

  })
  .catch((err)=>{

  })

})


module.exports = router;
