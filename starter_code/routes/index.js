const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    // console.log(`Retrieved from the db: ` + movies)
    res.render('movies', { movies })
    //res.send(movies)
  })
  .catch( err => {
    console.log(err)
    // res.send(err)
  })
})

router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById({'_id': req.params.movieId})
  .then(movie => {
    res.render('details', { movie })
    //console.log('The ID from the URL is: ', movieId)
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router;
