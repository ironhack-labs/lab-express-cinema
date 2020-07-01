const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
  Movie.find({})
  .then((Movies) => res.render( 'movies' , {Movies}) )
  .catch((e)=> console.log(e)) 
}
);
router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((Movie) => res.render( 'movie' , {Movie}) )
  .catch((e)=> console.log(e)) 
}
);

module.exports = router;
