const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/*GET /movies route */
router.get('/movies', (req, res, next) => {
  Movie.find({}).then((movies)=>{
    res.render('movies', {movies});   
  })
});


router.get('/movies/:id', (req, res, next) => {
  console.log(req.params.id)
  Movie.findById(req.params.id).then((movie)=>{
    res.render('details', {movie});   
  })
});

module.exports = router;
