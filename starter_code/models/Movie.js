// Iteration 1 | Seed the database

// https://mongoosejs.com/docs/guide.html

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defining your schema
const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

// Creating a model
const Movie = mongoose.model("Movie", movieSchema);

// Exporting the model
module.exports = Movie;
