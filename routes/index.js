const express = require('express');
const { render, resource } = require('../app');
const router = express.Router();
const moviesController = require("../controllers/movies.controller");
const miscController = require("../controllers/misc.controller");

/* GET home page */
router.get('/', miscController.index);

router.get('/movies', moviesController.list);
router.get('/movies/:id',moviesController.detail);

module.exports = router;
