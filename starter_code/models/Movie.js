const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: { type: String, required: true },
  director: String,
  stars: Array,
  description: String,
  showtimes: Array,
  image: String
});

module.exports = mongoose.model("Movies", MovieSchema);
