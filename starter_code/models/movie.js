// import { Mongoose } from "mongoose";

const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});

const Movies = mongoose.model("Books", moviesSchema);

module.exports = Movies;
