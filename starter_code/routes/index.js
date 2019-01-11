const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res)=>{
  Movies.find()
  .then(movies =>{
    res.render('movies', {movies})
  })
  .catch(err =>{
    console.log(err)
  })
})

router.get('/movies/:id',(req,res)=>{
  let movieId = req.params.id
  Movies.findOne({'_id':movieId})
  .then((movies)=>{
    res.render('movie-more', {movies})
  })
  .catch((err)=>{
    console.log(err)
  })
})

module.exports = router;
