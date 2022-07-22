const router = require('express').Router()
const miscController = require('../controllers/misc.controller')
const booksController = require('../controllers/movies.controller')


// MISC
router.get('/', miscController.home)

// BOOKS

router.get('/movies', moviesController.list)
router.get('/movie/:id', moviesController.movieDetail)

module.exports = router