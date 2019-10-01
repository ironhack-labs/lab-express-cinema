const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: String,
  director: {type: Schema.Types.Mixed, ref: "director"},
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
})

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;