const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: {type: String,  required: true},
  director: {type: String,  required: true},
  stars: { type: [String], required: true},
  image: String,
  description: {type: String,  required: true},
  showtimes: {type: [String], required: true},
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;