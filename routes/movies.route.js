
 

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

router.get('/movies', async (req, res, next) => {

  

  res.render('movies');
});


router.get('/movies/:moviesId', async (req, res, next) => {

  res.render('movies');
});

module.exports = router;