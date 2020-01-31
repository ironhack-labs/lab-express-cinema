const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie')

/* GET home page */
router
  .get('/', (req, res, next) => {
    res.render('index')
  })
  .get('/movies',(req,res,next) => {
    Movies.find()
      .then( base => {
        res.render('movies', {base})
      })
      .catch(err => console.log(err))
  })
  .get('/movie/:id', (req,res) => {
    const {id} = req.params
    Movies.find({_id: id})
      .then( data => {
        res.render('movie', {data})
      })
      .catch(err => console.log(err))
  })

module.exports = router;
