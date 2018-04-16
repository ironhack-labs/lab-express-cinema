const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {type: String, required: true},
  director: {type: String, required: true},
  stars: {type: Array},
  // stars: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
  image: {type: String},
  // image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  description: {type: String},
  showtimes: {type: Array}
},{
  timestamps: true
});

// create the "Movie" model for the 'movies' collection
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

