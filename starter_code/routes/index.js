const express = require("express");
const router = express.Router();

const {
    home,
    movies
} = require("../controllers/index.controller");

router.get("/", home);

router.get("/movies", movies);


module.exports = router; 
