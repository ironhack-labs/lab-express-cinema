const express = require('express');
const router = express.Router();
//const movieController = require("../controllers/movieController")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


module.exports = router;
