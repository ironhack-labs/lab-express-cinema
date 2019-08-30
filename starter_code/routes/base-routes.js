const express = require('express');
const router  = express.Router();
const MovieModel = require("./../models/Movies");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  MovieModel.find().then(dbRes => {
    // console.log(dbRes)
    res.render('movies', {movies: dbRes}); // new object {} with key : value pairs {key: value}
  }).catch(dbErr => {
    console.log(dbErr);
  });
  
});

router.get('/movies/:id', (req, res, next) => {
  // console.log(req.params.id)
  MovieModel.findById(req.params.id).then(dbRes =>{
    res.render('movie', {movie: dbRes});
  }).catch(err => console.log(err));

});

// promiss


module.exports = router;
