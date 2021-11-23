//1. IMPORTACION
const express           = require('express');
const router            = express.Router();



const movieController   =require("../controllers/moviesController")

//2. Rutas del BASE URL
router.get("/peli", movieController.getAllMovies)
router.get("/peli/:peliID", movieController.getMovie)

/* GET home page */
// router.get('/', (req, res, next) => res.render('index'));


//3.EXPORT 
module.exports = router;