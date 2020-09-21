const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");




/* GET movie page */
router.get("/movies", (req, res) => res.render("movies"));



module.exports = router;
