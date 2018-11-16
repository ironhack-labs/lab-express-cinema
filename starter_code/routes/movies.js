const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie');


router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((allTheMovies)=>{
    res.render('movies',{allTheMovies})
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/details/:id',(req,res,next)=>{
  Movie.findById(req.params.id)
  .then((movieDetails)=>{
    res.render('details',{movieDetails})
  })
  .catch((err)=>{
    next(err);
  })
})





module.exports = router;
