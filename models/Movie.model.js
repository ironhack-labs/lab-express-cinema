const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: {
      type: String,
      default:
        "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg",
    },
    description: String,
    showtimes: [String],
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
