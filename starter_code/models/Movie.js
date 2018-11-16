const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    starts: [],
    image: String,
    descriptions: String,
    showtimes:[],
  }, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });
  
  const Movie = mongoose.model("Movie", movieSchema);
  
  module.exports = Movie;