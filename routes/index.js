const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
      Movie.find()
      .then(movies => {
        console.log(movies);
        res.render('movies', {movies});
      }).catch(err =>{
        console.log(err);
      })
})

router.get('/movies/:id', (req,res)=>{
      const id = req.params.id;
      Movie.findOne({'_id' :id})
      .then(movie =>{
        console.log('descripcion', movie.description)
        res.render('detail_movies', {movie})
      }).catch(err=>{
        console.log(err)
      });
})

module.exports = router;
