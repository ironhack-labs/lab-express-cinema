const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

// ROUTES:

router.get('/movies', async (req, res, next) => {

    const movies = await Movie.find()
    res.render('movies', movies);
});



  router.get('/movies/:moviesId', async (req, res, next) => {
     const {id} = await Movie.findbyId(req.params.moviesId);
    res.render('movies', id);
  });
  
  module.exports = router;