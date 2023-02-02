const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  tilte: {
    type: "String",
    require: true,
  },
  director: {
    type: "String",
    require: true,
  },
  stars: {
    type: ["String"],
    require: true,
  },
  imager: {
    type: "String",
  },
  description: {
    type: "String",
    require: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
