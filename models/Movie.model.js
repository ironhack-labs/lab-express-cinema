const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  // TODO: write the schema
  title: { type: String, required: true, unique: true },
  director: { type: String, required: true },
  stars: [
    {
      type: String,
    },
  ],
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  description: { type: String, required: true },
  showtimes: [
    {
      type: String,
    },
  ],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
