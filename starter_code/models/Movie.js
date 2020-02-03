let mongoose = require("mongoose");

let movieSchema = new mongoose.Schema({
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

let Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
