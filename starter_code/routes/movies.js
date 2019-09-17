const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

// GET movies page
router.get('/movies', (req, res, next) => {

console.log("getttt")
  Movie.find({})
    .then(data => {
      console.log("test")
      console.log(data);
      //res.send(data);

      res.render('movies.hbs', {data});
    })
    .catch(err => {
      console.log("Error at Movie.find(): ", err);
    });
});








// GET movie info page
router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
.then(info =>{
    console.log(info);
    res.render('movie-info', info);
  })
  .catch(err => {
    console.log("Error at find movie by ID: ", err);
  })
});












module.exports = router;