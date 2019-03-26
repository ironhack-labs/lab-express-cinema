const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find()
  .then(movies => {
    res.render('movies', {movies})
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/detail/:id', (req, res) => {
  const {id} = req.params;
  Movie.findById(id).then(movies => {
    console.log(`The movie id is: ${id}`)
    res.render('detail', movies)
  })
})

module.exports = router;
