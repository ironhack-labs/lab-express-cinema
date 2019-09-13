const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: String,
    year: Number,
    // rate: Number,
    // director: String,
    // duration: String,
    // genre: [
    //   String
    // ]
  });

const Movies = mongoose.model("Movies", movieSchema);
module.exports = Movies;
