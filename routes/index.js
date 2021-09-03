const express = require('express');
const { route } = require('../app');
const router = express.Router();
const Movie = require('../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies-page', (req, res) => {
  
    Movie
      .find()
      .then(movies => res.render('movies', { movies }))
      .catch(err => console.log(err))

})

router.get('/movies/details/:movies_id', (req, res) => {

  const { movies_id } = req.params
  

  Movie
    .findById(movies_id)
    .then(theMovie => res.render('details', theMovie))
    .catch(err => console.log(err))
})



module.exports = router;
