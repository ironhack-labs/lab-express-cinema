const express = require('express');
const router  = express.Router();
//Traer el modelo
const Movie = require('../models/Movie')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies',(req,res)=>{
  Movie.find()
  .then(movies => {
    res.render('movies',{movies})
  })
  .catch(err=>{
    console.log(err);
  })
})

router.get('/movies/:id', (req,res)=>{
  let movieId = req.params.id;
  Movie.findOne({_id:movieId})
  .then(movie=>{
    console.log(movie)
    res.render('movie_detail', {movie})
  })
  .catch(err=>{
    console.log(err)
  })
})


module.exports = router;
