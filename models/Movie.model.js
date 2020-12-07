// Iteration 1 | Seed the database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: ['String'],
  image: {
    type: String,
    default:
      "https://cdn6.aptoide.com/imgs/1/4/c/14c166cc3cd2cac8da4809024ba82d0e_icon.png",
  },  
  description: String,
  showtimes: ['String'],
});

const MovieModel = mongoose.model("movie", movieSchema);

module.exports = MovieModel;