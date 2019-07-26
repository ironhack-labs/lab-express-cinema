const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Recipe = require('models/Movies.js'); // Import of the model Recipe from './models/Recipe'
const data = require('bin/seeds.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  res.render('movies');
});

module.exports = router;
