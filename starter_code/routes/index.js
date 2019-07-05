const express = require('express');
const router = express.Router();
const movie = require('../models/Movie') 

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
movie.find({})
.then((movies) => {
  res.render('movies', {movies});
})
.catch(err => console.log(err));
});

router.get('/movie/:movieID', (req,res, next) => {
movie.findById(req.params.movieID)
.then((mov) => {
  res.render('movie', mov);
})
.catch(err => console.log(err));
});

module.exports = router;
