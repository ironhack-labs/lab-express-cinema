const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');



/* GET movies page */
router.get('/', (req, res, next) => {
    Movie.find({}, {title: 1, image: 1, description: 1})
    .then((movie) => {
      console.log(movie)
      res.render('movies', {movie});
      
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })
    
  })

router.get('/details/:id', (req, res, next)=>{
  const movieID = req.params.id;
  Movie.findById(movieID)
  .then((result)=>{
      res.render('singleMovie', result);
  })
  .catch((error)=>{
      res.send(error);
  });
});



  
module.exports = router;
