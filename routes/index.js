const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//Ruta a movies
router.get('/movies', (req, res, next)=>{
  Movie.find()
  .then(movies=>{
    res.render('movies', {movies})
    console.log(movies.length)
  })
  .catch(err=>{
    console.log("error >>> " + err)
  })
});


//Rutas para detalles movie
router.get('/movies/:id', (req, res, neex)=>{
  let movieId = req.params.id;
  Movie.findOne({'_id' : movieId})
  .then(movie => {
    res.render('movie_detail', {movie})
  .catch(err=>{
    console.log('error >>> ' + err)
  })
})

})

module.exports = router;
