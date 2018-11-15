
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  description: String,
  author: String,
  rating: Number
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;