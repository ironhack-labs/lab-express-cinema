const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie')

/* GET movies page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then((listOfMovies)=>{
  res.render('allMovies', {listOfMovies})
  
    })
    .catch((err)=>{
    
        res.send(err);
  
    })


});


router.get('/:theID', (req, res, next)=>{
  const oneMovieID = req.params.theID
  Movie.findById(oneMovieID)
  .then((oneMovie)=>{
      res.render('oneMovie', {movie: oneMovie})
  })
  .catch((err)=>{
      res.send(err);
  });
});


module.exports = router;