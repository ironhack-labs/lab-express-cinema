const express = require('express');
const router = express.Router();

const Movie = require('../models/movies');


router.get('/movies', (req, res, next)=> {
});

// app.get('/movies', (req, res, next)=> {
  //   Movies.find()
  //   .then((listOfMovies)=>{
    //     res.render('movies', {moviesArray: listOfMovies});
//   })
//   .catch((err)=>{
  //     console.log(err);
//   });
// });

// app.get('/movies/:id', (req, res, next)=> {
//   const theID = req.params.id;

//   Movie.findById(theID)
//   .then((theFlick)=> {
//     res.render('')
//   });
// });

router.get('/', (req, res, next)=>{

  Movie.find()
  .then((listOfMovies)=>{
    console.log(listOfMovies);
    res.render('movies', {moviesArray: listOfMovies});

  })
  .catch((err)=>{
    console.log(err);
  });
});
module.exports = router;