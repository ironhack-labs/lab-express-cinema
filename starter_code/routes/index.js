const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie");
const filemovies = require("../bin/seeds.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
