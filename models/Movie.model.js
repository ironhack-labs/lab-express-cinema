const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    stars: { type: [String], required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    showtimes: { type: [String], required: true },

});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
