const express = require('express');
const router  = express.Router();
const Movie    = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('index', { movies });
  })
  .catch(err => {
    res.render('index')
  })
});

router.get('/movies/:id', (req, res) => {
  const { id } = req.params; //the best way to get the id info is using req.params. 
  Movie.findById(id)
  .then(movie => {
    res.render('movie', movie);
  })
  .catch(err => {
    res.render('detail');
  })
});

module.exports = router;