'use strict';

const express = require('express');
const router = express.Router();

// const Movie = require('../models/movie.js');

router.get('/', (req, res, next) => {
  res.render('movies');
});

module.exports = router;
