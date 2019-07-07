const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next)=>{
  Movie.find()
  .then((theThingWeGetBackFromDB)=>{
    res.render('movies',{allTheMovies: theThingWeGetBackFromDB})
  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/movies/:id', (req, res, next)=>{
  let theID = req.params.id;
  console.log(theID);
  Movie.findById(theID)
  .then((oneSingleMovie)=>{
    console.log(oneSingleMovie);
    res.render('movieDetails', {theMovie: oneSingleMovie})
  })
  .catch((err)=>{
    next(err);
  })
})


module.exports = router;
