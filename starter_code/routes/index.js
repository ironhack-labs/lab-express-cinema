const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async (req, res, next) => {
  const data = await Movie.find()
  console.log(data)
  res.render('movies', { data })
})

router.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params
  const data = await Movie.findById(id)
  res.render('movie-detail', data)
})

module.exports = router;
