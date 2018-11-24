const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (request, response)=>{
  response.render('index')
})

//Mostrando las películas
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies=>{
    res.render('movies', { movies })
  })
  .catch(e=>{
    res.render(e)
  })
});

//Mostrando el detalle de la película
router.get('/movies/:id', (request, response)=>{
  const { id } = request.params
  Movie.findById(id)
  .then(movie=>{
    response.render('partials/detail', movie)
  })
  .catch(e=>{
    console.log(e)
  })
})

module.exports = router;
