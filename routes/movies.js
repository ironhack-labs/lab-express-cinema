const express = require('express');
const MoviesModel = require('../models/Movie.js');

const router  = express.Router();


/* GET movies page */
router.get('/', (req, res, next) => {

  MoviesModel.find({},(err, moviesArray) => {
    console.log("Result: ", moviesArray);
    res.render('movies', { moviesArray });
  });

});


router.get('/detail/:id', (req, res, next) => {

  const idMovie = req.params.id;

  MoviesModel.find({},(err, moviesArray) => {
    const movie = moviesArray[idMovie];
    res.render('movie_detail', { movie });
  });

});



module.exports = router;
