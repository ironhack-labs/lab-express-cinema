const express = require('express');
const router = express.Router();
const Movies = require('../models/movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find().then(movies => {
    res.render("movies", { movies });
  })
})

router.get('/movies/:id', (req, res, next) => {

  Movies.findById(req.params.id)
    .then(movies => {
      res.render("info", { movies });
    })
})

module.exports = router;
