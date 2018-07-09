const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title : String,
  director: String,
  stars: {type: [String], minlength: 1},
  image: String,
  description: String,
  showtimes: {type: [String], minlength: 1},
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;