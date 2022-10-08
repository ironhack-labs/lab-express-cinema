const express = require('express');
const router = express.Router();
const movieModel = require('../models/movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res) => {
    res.render('movies');
  });

module.exports = router; 