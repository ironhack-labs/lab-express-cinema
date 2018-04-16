const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {type: String},
    director: {type: String},
    stars: {type: Array},
    image: {type: String},
    description: {type: String},
    showtimes: {type: Array}
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;