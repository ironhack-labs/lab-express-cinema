const express = require('express');
const Movies = require('../models/Movies');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
  try {
    const movies = await Movies.find();

    res.render('movies', { movies });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
