const express = require('express');
const router = express.Router();

const commonControllers = require('../controllers/common.controller');
const moviesControllers = require('../controllers/movies.controller')

router.get('/', commonControllers.home);
router.get('/movies', moviesControllers.list);





module.exports = router;