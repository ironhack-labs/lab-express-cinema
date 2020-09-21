const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CinemaSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: {
    type: String,
    default:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  description: String,
  showtimes: [String],
});

const Cinema = mongoose.model("Cinema", CinemaSchema);

module.exports = Cinema;
