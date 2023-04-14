const express = require('express');
const router = express.Router();
const movie = require('movies')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => res.render('movies'));
module.exports = router;
