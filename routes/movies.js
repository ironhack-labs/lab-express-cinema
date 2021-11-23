//1.IMPORTACIONES
const express = require("express")
const router = express.Router()
const movieController = require("./../config/controllers/movie.Controller")


//2. RUTEO CON URL
router.get("/create", movieController.viewCreateMovie)

// CREAR PELICULA
router.post("/create",  movieController.createMovie)

// READ
router.get("/", movieController.getAllMovies)

// LECTURA DE PELI ESPECIFICA
router.get("/:movieID", movieController.getMovie)


// 3. EXPORTACIÓN
module.exports = router


//3. EXPORTAR
module.exports = router