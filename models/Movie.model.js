const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {
      type: String,
    },
    director: {
      type: String,
    },
    stars: {
      type: [String],
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    showtimes: {
      type: [String],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;

