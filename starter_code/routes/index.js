const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies=>{
    // console.log(movies)
    res.render('movies',{movies});
    // res.send(movies)
  })
  .catch(err=>{
    res.render('error')
    // res.send(err)
  })
});
module.exports = router;
