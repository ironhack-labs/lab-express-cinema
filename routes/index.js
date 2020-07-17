const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((moviesDB) => {
    console.log('Imported!', moviesDB)
    res.render('movies', moviesDB)
  })
  .catch((err) => console.log(err))
} )

router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then( data => {
    console.log('Print this data!', data)
    res.render('movie', data)
  })
  .catch((err) => console.log(err))
})

module.exports = router;
