const express = require('express');
const router  = express.Router();
const {indexView, moviesView, moviesSched} = require('../controllers/index.controllers')
/* GET home page */
router.get('/', indexView )
router.get('/movies',  moviesView)
router.get('/movies/:id', moviesSched)
module.exports = router;
