const express = require('express');
const router  = express.Router();
const Movies  = require('../models/movies');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movies.find()
  .then(data => {
    res.render('movies', { data });
  })
  .catch(err => console.log(err))
});

router.get('/movie-details/:id', (req, res) => {
  Movies.findById(req.params.id)
  .then(dataMovie => {
    console.log(dataMovie);
    res.render('movie-details', dataMovie);
  })
  .catch(err => console.log(err))
})

module.exports = router;
