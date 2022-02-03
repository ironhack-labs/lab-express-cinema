const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

const movieController = require('../controllers/movieController')
// Ruteo

router.get('/movies',movieController.listMovies)

module.exports = router;
