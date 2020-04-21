const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//creo un schmeema paso 2 !!!
const movieSchema = new Schema({
  title: String,
  image: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
