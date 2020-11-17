const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
   Movie.find().then(movies => {
     console.log(movies);
    res.render('movies', { movies });
  }).catch((err) => {
    console.log('Error', err);
  })
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
    Movie.findById(id).then(id => {
      console.log(id)
      res.render('moviedetails', {id});
  })
})

module.exports = router;
