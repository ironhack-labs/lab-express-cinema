const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find().then(movies =>{
    data = movies;
    console.log(`Esto es lo que sale ${data}`);
    res.render('movies', {data} );
  })
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findOne({_id: req.params.id}).then(movies =>{
    data2 = movies;
    console.log(`Esto es lo que sale ${data}`);
    res.render('detail', {data2} );
  })
});


module.exports = router;
