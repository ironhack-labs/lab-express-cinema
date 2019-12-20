const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie') //ASSIM EU TENHO QUE FAZER UM REQUIRE PARA O MEU MODEL 

/* GET home page */
router.get('/', (req, res, next) => {
  Movie
  .find({}, {title:1, image:1})
  .then(movies => {
    // console.log(books) //aqui to buscando a minha collection books (que ta no seeds.js) ou o res.send(books)
    res.render('movies', { movies })
    // res.send(movies);
  })
  .catch(error => {
    console.log(error)
  })
});

/* GET details page */
router.get('/:id', (req, res, next) => {
  let {id} = req.params //O ID ESTA DISPONIVEL ATRAVES DO PARAMS, ENTAO EU DESCONTRUI COM O bookId
  Movie
  .findById(id) 
  .then(movie => {
    res.render('details-movie', { movie })
  })
  .catch(error => next(error))
});



module.exports = router;