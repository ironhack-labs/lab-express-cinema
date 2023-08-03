const express = require('express');
const router = express.Router();
const movies = require("../controllers/movies.controllers");
/* GET home page */
router.get("/movies", movies.list);
router.get("/movies/:id", movies.detail)

module.exports = router;
