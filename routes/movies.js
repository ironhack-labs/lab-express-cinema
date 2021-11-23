
// ./routes/movies.js

// 1. IMPORTACIONES
const express			= require("express")
const router			= express.Router()

const movieController	= require("./../controllers/movieController")


// 2. RUTEO CON BASE URL

// CREATE
// CREAR LIBRO
router.get("/create", movieController.viewCreateMovie)

// CREAR LIBRO - RUTA PARA EL FORMULARIO
router.post("/create",  movieController.createMovie)

// READ
// LECTURA DE LOS LIBROS CREADOS
router.get("/", movieController.getAllMovies)

// LECTURA DE UN LIBRO ESPECÍFICO
router.get("/:movieID", movieController.getMovie)


// 3. EXPORTACIÓN
module.exports = router
