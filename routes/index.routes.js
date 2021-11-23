//1. IMPORTACION
const express           = require('express');
const router            = express.Router();

const indexController   =require("../controllers/indexController")


//2. Rutas del BASE URL

router.get("/", indexController.home)

/* GET home page */
// router.get('/', (req, res, next) => res.render('index'));


//3.EXPORT 
module.exports = router;