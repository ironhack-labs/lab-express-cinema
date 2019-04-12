const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js')
// module.exports = Movie;

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  // res.render('movies');
  // console.log(data)
      Movie.find()
      .then(data => {
      res.render('movies', {
          listMovies: data
      });
      })
    .catch(err => {
      console.log("The error while searching artists occurred: ", err);
    })
  //  res.send('artists');
  })

module.exports = router;

router.get('/movies/:_id', (req, res, next) => {
  // res.render('movies');
  // console.log(data)
      Movie.findById(req.params._id)
      .then(data => {
      res.render('see-more', {
          listMovies: data
      });
      })
    .catch(err => {
      console.log("The error while searching artists occurred: ", err);
    })
  //  res.send('artists');
  })