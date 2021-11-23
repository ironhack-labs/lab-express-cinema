// ./routes/movies.js

// 1. IMPORTACIONES
const express = require('express');
const router = express.Router();

const movieController = require('./../controllers/movieController');

// 2. RUTEO CON BASE URL


// READ
// LECTURA DE LOS LIBROS CREADOS
router.get('/', movieController.getAllMovies);

// LECTURA DE UN LIBRO ESPECÍFICO
router.get('/:movieID', movieController.getMovie);

// 3. EXPORTACIÓN
module.exports = router;
