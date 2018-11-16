const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie');

//console.log(movies);

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find({})
    .then(movies => {
      //console.log(movies);
      res.render('movies', {movies});
    })
    .catch(err => {
      console.log(`Error al cargar las pelis ${err}`)
    })

});


module.exports = router;
