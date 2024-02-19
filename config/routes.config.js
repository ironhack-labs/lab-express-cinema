const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movies.controller')


/* GET home page */
router.get('/', (req, res, next) => res.render('index', {title: 'Cinema Ironhack'}));
router.get('/movies', movieController.getMovies);
router.get('/movies/:id', movieController.detail);

module.exports = router;
