const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie.js")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {title: "Cinema Ironhack"});
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', {title: "Cinema Ironhack", movies});
    })
    .catch(err => next(err))
});

module.exports = router;
