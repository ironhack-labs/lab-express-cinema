// importaciones
const express = require('express')
const router = express.Router()

const movieController = require('../controllers/movieController')
// Ruteo

router.get('/movies',movieController.listMovies)

//Exportaciones
module.exports = router