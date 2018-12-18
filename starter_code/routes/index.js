const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find().then(movies => {
      //console.log(books);
      res.render('movies',{moviesArray: movies})
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/movies/:id', (req, res) => {
//  console.log(req.params.id);

  Movie.findOne({_id: req.params.id}).then(document => {
      //console.log(books);
      res.render('moviePage',{movie: document})
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;
