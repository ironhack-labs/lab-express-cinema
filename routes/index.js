const express = require('express');
const movieController = require('../controllers/movies.controller');

const router = express.Router();

/* GET home page */
router.get('/', movieController.home);      /**Ruta de la HOME*/
router.get('/movies', movieController.list);
router.get('/movies/:id', movieController.detail);

module.exports = router;
