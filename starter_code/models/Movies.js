const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
  title: String,
  author: String,
  text: String
},
{timestamps:true}
);

const Movies = mongoose.model("Movies", MoviesSchema);

module.exports = Movies;