//IMPORTACIONES

const express = require('express');
const router = express.Router();

const movieController=require("./../controllers/movieController")


//MANEJO DE RUTAS
/* GET home page */
router.get('/',movieController.home);

router.get('/movies',movieController.listMovies)
router.get('/:id',movieController.oneMovie)

module.exports = router;
