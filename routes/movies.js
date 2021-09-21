// routes/movies.js

// 1. IMPORTACIONES
const express       = require("express")
const router        = express.Router()

const movieController    = require("./../controllers/movieController")


// 2. MANEJO DE RUTAS
// http://localhost:3000/movies

// a. VER LIBROS
router.get("/", movieController.listMovies)

//GENERAR VISTA DE HOME
router.get("/Home", movieController.Home)

//GENERAR VISTA DE HOME
router.get("/:movieid", movieController.oneMovie)


// 3. EXPORTACIÓN
module.exports = router