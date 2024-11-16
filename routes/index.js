const express = require('express');
const router = express.Router();

const {
    getMovies,
    detailMovie,
    deleteMovie

} = require('../controllers/movies.controller');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', getMovies)
router.get('/movies/:movieId', detailMovie)
router.post('/movies/:movieId/delete', deleteMovie)

module.exports = router;
