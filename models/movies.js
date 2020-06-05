const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
