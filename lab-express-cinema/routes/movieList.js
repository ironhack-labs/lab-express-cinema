const express = require('express');
const router  = express.Router();
const Movie = require('../models/movies')

/* GET home page */

router.get('/', (req, res, next) => {
  Movie.find()
  .then((listOfMovies)=>{
      console.log(listOfMovies);
    res.render('movies', {movieArray: listOfMovies});
})
.catch((err)=>{
    res.send(arr);
})
});

// Finding the ID

router.get('/movies/:id', (req, res, next)=>{
    const theID = req.params.id;
    Movie.findById(theID)
    .then((theMovie)=>{
        res.render('pickedMovie', {movie: theMovie})
    })
    .catch((err)=>{
        res.send(err)
    })
   });



module.exports = router;