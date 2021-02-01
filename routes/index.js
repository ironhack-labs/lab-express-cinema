const express = require('express');
const router = express.Router();

//controllers
const homeController = require('../controllers/home.controller')
const movieController = require('../controllers/movies.controller')
/* GET home page */
router.get('/', homeController.home)
router.get('/movies', movieController.movie)
router.get('/movie/:id', movieController.detail)


module.exports = router;
