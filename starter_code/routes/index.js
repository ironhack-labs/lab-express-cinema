const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/movies',(req,res,next)=>{
  Movie.find()
  .then((theMovies)=>{
    console.log(theMovies);
    res.render('movies',{allTheMovies: theMovies});

  })
  .catch((err)=>{
     next(err)
  })
})
router.get('/movies/:id',(req,res,next)=>{
  let movieID = req.params.id;
  Movie.findById(movieID)
  .then((oneMovie)=>{
    res.render('movieDetails', {theMovie:oneMovie})
  })
  .catch((err)=>{
    console.log(err);
  })

})

module.exports = router;
