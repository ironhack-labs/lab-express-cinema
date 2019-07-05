const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render('movies', { movies });
    })
    .catch(err => console.log(err));
});

router.get('/movies/:id', (req, res) => {
  const id = req.params.id
  console.log(id);  
  Movie.findById(id)
    .then((id) => {
    res.render('moviedetails', id );
  })
    .catch(err => console.log(err));
});

module.exports = router;
