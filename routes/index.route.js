const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  const buttonMovies = 'Check the movies';
  res.render('index', {buttonMovies});
});

module.exports = router;
