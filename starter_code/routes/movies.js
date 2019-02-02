const express = require('express');
const router  = express.Router();
const importMovies = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  importMovies.find({})
    .then((movies) => {
      console.log("hhhhhhhhhhhhhh")
      console.log(movies);
      res.render('movies', {
        movies,
      });
    })
});

module.exports = router;
