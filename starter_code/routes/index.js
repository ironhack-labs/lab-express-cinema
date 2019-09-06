const express = require('express');
const router  = express.Router();
const { indexView, moviesGet, movieDetail} = require('../controllers/index.controller');

/* GET home page */
router.get('/', indexView);
router.get('/movies', moviesGet);
router.get('/movie/:id', movieDetail);

module.exports = router;
