const express = require('express');
const router = express.Router();
const movieController = require("./../controllers/movieController")


//router.get('/', movieController.getMovies);
router.get('/', movieController.getMoviesOne);



module.exports = router;