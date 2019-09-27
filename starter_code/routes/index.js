const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find()
  .then(data => {
    console.log('Retrieved books from DB:', data);
    res.render('movies', {data});
  })
  .catch(error => {
    console.log('Error while getting the books from the DB: ', error);
  })
});

router.get('/movies/:_id', (req, res, next) => {
  const movieId = req.params._id;

  Movies.findById(movieId)
  .then(data => {
    // console.log('Retrieved books from DB:', data);
    res.render('movie-details',data);
  })
  .catch(error => {
    console.log('Error while getting the books from the DB: ', error);
  })
});




module.exports = router;
