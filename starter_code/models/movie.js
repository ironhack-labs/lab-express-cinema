const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const moviesSchema = new Schema({
    title: String,
  director: String,
  stars: [],
  image: String,
  description: String,
  showtimes: []
});

 const Movie = mongoose.model("Movie", moviesSchema);
 module.exports = Movie; 
