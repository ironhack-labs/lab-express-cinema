const express = require('express');
const router  = express.Router();
const Movie         = require('../models/Movie'); 

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




router.get('/list-of-movies', (req, res, next)=>{
  Movie.find()
  .then((theThingWeGetBackFromDB)=>{
    res.render('movies-list',{allTheMovies: theThingWeGetBackFromDB})
    // console.log(theThingWeGetBackFromDB[0]._id)
  })
  .catch((err)=>{
    next(err);
  })
})


router.get('/movies/:movieID', (req, res, next)=>{
  let theID = req.params.movieID;
  Movie.findById(theID)
  .then((oneSingleMovie)=>{

    res.render('movieDetails', {theMovie: oneSingleMovie})

  })
  .catch((err)=>{
    next(err);
  })

})


module.exports = router;

