const express = require('express');
const router  = express.Router();
const Movies = require("../models/Movies");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find()
  .then( movies => res.render('movies', {movies}))
    
});

router.get('/movie/:id', (req, res, next) => {
    // res.json(req.params.id)
   Movies.findById(req.params.id)
   .then(movie => res.render('movie', movie))
})


module.exports = router;
