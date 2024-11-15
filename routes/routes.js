
const router =  require('express').Router();

/* GET home page */
const {
    home,
    getMovies,
    create,
    doCreate,
    getMovie,
    getMovieByCategory,
    deleteMovie

} = require('../controllers/movies.controller');


router.get('/', home);
router.get('/movies', getMovies)
router.get('/movie/create', create)
router.get('/movie/:id', getMovie)
router.post('/movie/create',doCreate)
router.post('/movies/:id/delete', deleteMovie)

module.exports = router;
