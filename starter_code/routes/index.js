const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




/* Get movies page */
router.get('/movies', (req, res, next)=>{

  Movie.find()
  .then((allTheMovies)=>{
    res.render('movies',{allTheMovies:
      allTheMovies})
  })
  .catch((err)=>{
    next(err);
  })
  
})



/* Get single movie page */
router.get('/movie/:id', (req,res,next)=>{

  let theId = req.params.id;
  Movie.findById(theId)
  .then((oneSingleMovie)=>{
    res.render('movie', {theMovie: 
                              oneSingleMovie})
  })
  .catch((err)=>{
    next(err);
  })
})




module.exports = router;
