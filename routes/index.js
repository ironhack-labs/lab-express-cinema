const express = require('express');
const router = express.Router();
//const movieController = require("../controllers/movieController")
const movieController = require("./../controllers/movieController")
const movieControllerOne = require("./../controllers/movieControllerOne")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', movieController.getMovies);
router.get('/movies/:id', movieControllerOne.getMoviesOne);


module.exports = router;
