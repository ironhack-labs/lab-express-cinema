const express = require("express");
const router = express.Router();

const {
    home,
    movies,
    movie
} = require("../controllers/index.controller");

router.get("/", home);

router.get("/movies", movies);

router.get("/movies/:id", movie);
  

//router.get("/movies/:_id", info);

//router.get("/movie/:_id", info);

module.exports = router; 
