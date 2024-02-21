const express = require('express');
const router = express.Router();
const movies = require('../controllers/movies.controller')

router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', movies.list);
router.get('/movies/:id', movies.details);

module.exports = router;
