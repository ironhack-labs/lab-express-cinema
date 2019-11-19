const express = require("express");
const router = express.Router();

const {
    home,
    movies,
    info
} = require("../controllers/index.controller");

router.get("/", home);

router.get("/movies", movies);

router.get("/movies/:id", info);

module.exports = router; 
