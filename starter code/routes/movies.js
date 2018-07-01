const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/cinema.controller');


/* GET users listing. */
router.get('/', moviesController.list)

module.exports = router;
