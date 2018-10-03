const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res,)=>{
    Movie.find()
        .then(movies=>{
            res.render('movies', {movies})
        })
});

module.exports = router;

