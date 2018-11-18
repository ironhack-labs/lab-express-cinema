const express = require('express');
const router  = express.Router();

const Movie = require ('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;


router.get('/movies', (req,res,next) => {
  Movie.find()
  .then(movies => {
    res.render('movies',{movies});
  })
  .catch(error => {
    console.log(error);
  })
});

router.get('/movie/:id', (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id)
  .then(movie => {
    res.render('movie', {movie});
  })
  .catch(error => {
    console.log(error)
  })
});


