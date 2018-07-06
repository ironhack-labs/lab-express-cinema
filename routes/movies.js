const express = require('express');
const router  = express.Router();
const Movie        = require('../models/movies');


// router.get('/movies', (req, res, next)=> {
//   res.render('movies');
// })


router.get('/movies', (req, res, next)=>{
  Movie.find()
.then((listOfMovies)=>{
  res.render('movies', {moviesArray: listOfMovies})

})
.catch((err)=>{
  res.send(err);
})
})

router.get('/movies/:id', (req, res, next)=>{
  const theID = req.params.id;
  Movie.findById(theID)
  .then((theMovie)=>{
      res.render('singleMovie', {movie: theMovie})
  })
  .catch((err)=>{
      res.send(err)
  })
});






module.exports = router;