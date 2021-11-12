const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const movieSchema = new Schema(
  {
    title: String,
    description: String,
    stars: [String],
    image: String,
    showtimes: [String],
  },


);

const Movie = model("Movie", movieSchema);

module.exports = Movie;