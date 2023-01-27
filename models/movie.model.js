const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: "String",
  },
  director: {
    type: "String",
  },
  stars: {
    type: "Object",
  },
  image: {
    type: "String",
  },
  description: {
    type: "String",
  },
  showtimes: {
    type: "Object",
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
