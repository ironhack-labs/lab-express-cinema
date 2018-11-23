const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies=>{
    res.render('index', {movies})
  })
  .catch(err=>{
    res.render('index');
  })
});


router.get('/movies/:id', (req,res, next)=>{
  const {id} = req.params;
  Movie.findById(id)
  .then(movie =>{
    res.render('movies', movie)
  })
  .catch(err =>{
    console.log(`the error is ${err}`)
  })
})


module.exports = router;
