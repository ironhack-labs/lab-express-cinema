const express = require('express');
const router  = express.Router();
let mongoose = require('mongoose');
let Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies=>{
    res.render('movies', {movies});
  })
  .catch(e=>{
    res.render('error')
    console.log(e)
  
});
})
module.exports = router;