const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie')

router.get('/', (req, res, next)=>{
  Movie.find()
  .then(movies => {
    res.render('movies', {movies})
  })
  .catch(err =>{
    console.log(err)
    next(err)
  })
})




module.exports = router;