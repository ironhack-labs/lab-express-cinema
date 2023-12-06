const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies',dataController.getMovies)
router.get('/movieDetail/:id', dataController.getMovieDetail)

module.exports = router;
