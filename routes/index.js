const express = require('express');
const router = express.Router();
const movies = require("../controllers/movies.controllers")


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get("/movies",movies.list)
router.get ('/:id', movies.detail)

module.exports = router;
