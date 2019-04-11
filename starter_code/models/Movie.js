const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title : {type: String, unique: true, required: true},
  director: String,
  stars: {type: Array},
  image: {type: String},
  description: String,
  showtimes: {type: Array}
});

const Movie = mongoose.model("Movies", movieSchema);

module.exports = Movie;