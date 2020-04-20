const mongoose = require("mongoose");
const schema = mongoose.Schema;
const movieschema = new schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});
const movies = mongoose.model("movies", movieschema);
module.exports = movies;
