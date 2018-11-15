const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find().then(movies =>{
    console.log(`Esto es lo que sale ${movies}`, movies);
    data = movies[0];
    console.log(`Esto es lo que sale ${data}`, data);
    console.log(`Esta es la variable de entorno ${process.env.DBURL}`);
    res.render('movies', data);
  })
  
});

module.exports = router;
