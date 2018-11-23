const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies=>{
    res.render('index', {movies})
  })
  .catch(e=>{
    res.render('index')
  })
});

//Mostrando el detalle de la película
router.get('/movies/:id', (request, response)=>{
  const {id} = request.params
  Movie.find()
  .then(movie=>{
    response.render('detail', movie)
  })
  .catch(e=>{
    console.log(e)
  })
})

module.exports = router;
