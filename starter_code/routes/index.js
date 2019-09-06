const express = require('express');
const router  = express.Router();
const {indexView, getMovies, getDetails} = require('../controllers/index.controllers')
/* GET home page */
router.get('/', indexView )
router.get('/movies',  getMovies)
router.get('/movies/:id', getDetails)
module.exports = router;
