const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// esta es la url del navegador (lo que aparecería si pongo el ratón justo encima)
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      // este es el fichero /views/fichero_name que se abrirá al hacer click en el <a href>
      res.render("movies", {movies});
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/detail/:id', (req, res, next) => {
  let movieId = req.params.id
  Movie.findById(movieId)
  .then(movies => {
  res.render("detail",{movies})
  })
  .catch(error => {
    console.log(error)
  })
});


module.exports = router;
