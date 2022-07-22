const router = require('express').Router();

// Required the controllers
const miscController = require('../controllers/misc.controller');
const moviesController = require('../controllers/movies.controller')

// GET home page
router.get('/', miscController.home);

// GET movies list page
router.get('/movies', moviesController.list)

// GET movie detail page
router.get('/movies/:id', moviesController.detail)

// Export all routes
module.exports = router;