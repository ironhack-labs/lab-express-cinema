const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies');



router.get('/movies', (req, res, next) => {
  Movies.find()
  .then(movies => {
    res.render('movies', {movies});
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router;
