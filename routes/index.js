const express = require('express');
const router = express.Router();
const controllers = require("../controllers/films.controller")

/* GET home page */
router.get('/', controllers.showHome);
router.get('/movies', controllers.showFilms)

module.exports = router;
