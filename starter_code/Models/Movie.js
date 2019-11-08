const mongoose = require("mongoose"); // import mongoose dependency

// the Schema defines the future shape of the inserted documents in the studnets collection
const Schema = mongoose.Schema; // assign the Schema constructor to a constant

// ... instanciate the Schema with option (the blueprint)
const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});

const Movie = mongoose.model("Movie", movieSchema);
// create a model using the schema
// a "students" collection is automatically created when inserting first student in database

module.exports = Movie;
