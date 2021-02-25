const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const express = require("express");

// // planing how the hacker document should like like, before database insertion
const movieModel = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
});

const MovieModel = mongoose.model("movies", movieModel);

module.exports = MovieModel;
