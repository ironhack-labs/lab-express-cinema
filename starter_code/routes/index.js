const express = require('express');
const router  = express.Router();
const Movie = require('../models/movies.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next)=>{
  Movie.find().then(movies=>{
    console.log(movies);
    res.render("movies",{movies});
  })
  .catch(e =>{
    console.log(e);
  })
});

router.get('/movies/:id',(req, res, next)=>{
  let movieID=req.params.id;
  Movie.findOne({'_id':movieID}).then(movie=>{
    console.log(movie);
    res.render("movie-detail",{movie});
  }).catch(error=>{
    console.log(error);
  })
  console.log("id",movieID);
  
});

module.exports = router;
