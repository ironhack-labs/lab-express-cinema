const express = require('express');

const router = express.Router();
const movies = require('../controllers/movies.controller');
const common = require('../controllers/common.controller'); 

router.get('/movies', movies.list);
router.get('/', common.home);

module.exports = router;