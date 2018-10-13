const Movie = require('../models/Movie');
const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
                // res.send('respond with a resource');           testing funciona

  Movie.find()       // Queremos mostrar todas, por eso esta busqueda. Modelo la realiza
  .then((movies) => {
    res.render('movies', {movies: movies});
  })
  .catch(error => {
    console.log(error)
  })
});

module.exports = router;