const express = require("express");
const MovModel = require("../models/Movie.model");
const router = express.Router();
const mongoose = require("mongoose");

/* GET home page */
router.get("/", async (req, res, next) => {
  try {
    const mov = await MovModel.find();
    res.render("movies", { mov });
  } catch (err) {
    next(err);
  }
});

router.get("/movie/:id", async (req, res, next) => {
  try {
    const moreMov = await MovModel.findById(req.params.id);
    res.render("movie", moreMov);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
