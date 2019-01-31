const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET /movies */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', {movies});
  })
  .catch(error => {
    console.log(error)
  })
})

router.get('/movies/:id',(req,res, next) => {
  Movie.findOne({_id: req.params.id})
  .then(movie => {
    res.render('movies-details', {movie})
  })
  .catch((err)=>{
    console.log(err)
  })
})


module.exports = router;
