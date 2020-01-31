const express = require('express');
const Movies = require('../models/Movies')
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
//Get movies page.
router.get('/movies', (req, res) => {
  res.render('movies')
})

module.exports = router;