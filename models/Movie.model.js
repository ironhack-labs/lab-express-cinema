const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: {
      type: String,
      default: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    description: String,
    showtimes: [String]
  }
);
module.exports = model('Movie',movieSchema);