const express = require('express');
const Movie = require('../models/Movie.js');

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find({}).then((movies) => {
    console.log(movies);
    res.render('movies', { movies });
  });
});

router.get('/movie/:id', (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movies) => {
      console.log(movies);
      res.render('specificMovie', { movies });
    })
    .catch((err) => {
      console.log(`youve done fucked up ... : ${err}`);
    });
});

module.exports = router;
