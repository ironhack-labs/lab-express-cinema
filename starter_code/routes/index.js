const express = require('express');
const router = express.Router();
const {
  indexView,
  moviesPage,
  moviesDetails
} = require('../controllers')

/* GET home page */
router.get('/', indexView)
router.get('/movies', moviesPage)
router.get('/movies/:id', moviesDetails)

module.exports = router;