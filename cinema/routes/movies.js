const express = require('express');
const router  = express.Router();

const Movie = require("../models/movie")

/* GET movies page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then((listOfMovies) =>{
    // console.log(listOfMovies)
    res.render('movies', {moviesArray: listOfMovies})
  })
  .catch((err)=>{
    res.render(err)
  })

});


router.get('/:id', (req, res, next) =>{

  const theID = req.params.id
  Movie.findById(theID)
  .then((theMovie) =>{
    res.render('movieDetails', {movie: theMovie})
  })
  .catch((err) =>{
    console.log(err)
  })

})


module.exports = router;

