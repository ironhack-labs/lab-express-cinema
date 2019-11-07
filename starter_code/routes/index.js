const express = require('express');
const router = express.Router();
const moviesModel = require('../models/Movies'); // besoin de creer cette variable pour faire appel à notre base de données


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  moviesModel.find().then(dbRes => {
    res.render('movies', {
      movies: dbRes
    });
  });
});

module.exports = router;