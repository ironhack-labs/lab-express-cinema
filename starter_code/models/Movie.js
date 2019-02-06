const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// //create the Book schema using the MOngoose "Schema" class
const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String },
  stars: { type: String },
  image: { type: String },
  description: { type: String },
  showtimes: { type: String }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
