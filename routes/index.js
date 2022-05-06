const express = require("express");
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//!require the movie.routes.js and use allow router to use it
router.use('/', require('./movie.routes'));

module.exports = router;
