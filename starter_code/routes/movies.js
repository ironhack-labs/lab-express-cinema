const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', {movies: movies});
  })
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findOne({_id: req.params.id})  //hasta que no he mirado como se creaba el id (en este caso _id) no cargaban las movies...
  .then(movie => {
    res.render('movie', {movie});
  })
});
router.post('/movie/:id/edit', (req,res) =>{
  const {newDirector} = req.body;
  Movie.findByIdAndUpdate({_id: req.params.id}, {$set: {director:{newDirector}}})
  .then(movie => {
    res.render('movie', {movie});
  })
  .catch(error)
})

module.exports = router;