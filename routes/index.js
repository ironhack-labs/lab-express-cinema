const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res,next)=>{
  Movies.find()
  .then(movies=>{
    res.render('movies', {movies})
  }).catch(err=>{
    console.log(err)
  })
})

router.get('/movies/:id',(req,res,next)=>{
  const detalle = req.params.id
  Movies.findOne({'_id': detalle})
  .then(movie=>{
    res.render('movieDetail', {movie})
  }).catch(err=>{
    console.log(err)
  })
})

module.exports = router;
