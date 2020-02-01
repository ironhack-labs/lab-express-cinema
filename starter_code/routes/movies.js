const express = require('express');
const router  = express.Router();
const movieModel = require("../models/Movie")


router.get('/movies', (req, res, next) => {
  movieModel.find() // on recherche notre constructeur
    .then(movies => {
      res.render('movies', { movies: movies }); //le premier movies est celui du hbs;
    })
    .catch(error => {
      console.log('Error', error);
    })
});

router.get('/movie/:id', (req, res, next) => {
  movieModel.findById(req.params.id) // on recherche notre constructeur
    .then(movie => {
      res.render('movie', { movie: movie }); //le premier movies est celui du hbs;
    })
    .catch(error => {
      console.log('Error', error);
    })
});


module.exports = router;