const moongose = require("mongoose");
const Schema = moongose.Schema;

const movieSchema = new Schema({
  title: { type: String },
  director: { type: String },
  stars: { type: [String] },
  image: { type: String },
  description: { type: String },
  showtimes: { type: [String] },
});

const Movie = moongose.model("Movie", movieSchema);

module.exports = Movie;
