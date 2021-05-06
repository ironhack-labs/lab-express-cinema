const express = require('express'); //link with express
const router = express.Router(); //using express router management
const MovieModel = require("./../models/Movie.model.js") //link with the model I created in ./../models/Movie.models.js

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res, next) => res.render('movies.hbs'));


module.exports = router;
