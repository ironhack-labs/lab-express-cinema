const express = require('express');
const router  = express.Router();


router.get('/', (req, res, next) => {
  res.render('mainOne');
});


router.get('/movies', (req, res, next) => {
    res.render('moviesTwo');
  })



router.get('/movies/specific', (req, res, next) => {
  res.render('aMovieThree');
});

module.exports = router;
