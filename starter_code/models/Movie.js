const {model , Schema} = require("mongoose");

const movieSchema = new Schema(
  {
    title : String, 
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
  }
);

module.exports = model("Movies",movieSchema);