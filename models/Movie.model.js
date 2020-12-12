const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: {
    type: String,
    default:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  description: String,
  showtimes: [String],
});

const MovieModel = mongoose.model("movie", movieSchema);

module.exports = MovieModel;
