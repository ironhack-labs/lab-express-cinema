const express = require('express');
const router  = express.Router();
const { indexView, moviesGet, moviesDetail} = require('../controllers/index.controller')

/* GET home page */
router.get('/', indexView)
router.get('/movies', moviesGet)
router.get('/movies/:id', moviesDetail)

module.exports = router;
