const express = require('express');
const misc = require('../controllers/misc.controller');
const movies = require('../controllers/movies.controller');
const router = express.Router();

/* GET home page */
router.get('/', misc.home);
router.get('/movies', movies.list);
router.get('/movies/:id', movies.detail);


module.exports = router;
