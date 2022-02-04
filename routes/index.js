const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController.js')


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies',movieController.createMovies)

module.exports = router;