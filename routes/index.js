const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movies.controller')

/* GET home page */
router.get('/', movieController.home);
router.get('/movies', movieController.list)
router.get('/movies/:id', movieController.detail)


module.exports = router;
