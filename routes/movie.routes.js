// 1. IMPORTACIONES
const express = require('express');
const router = express.Router();

const movieController = require("./../controllers/moviesController")



// 2. READ (Lecutura de las peliulas credas)


// MODIFICAR RUTA
router.get("/", movieController.getAllMovies)

// Para obtener una en particular
router.get(":movieID", movieController.getMovie)


// 3. EXPORTACIÓN
module.exports = router;

