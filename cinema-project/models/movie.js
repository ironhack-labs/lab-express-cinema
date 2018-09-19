
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const moviesSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  rating: Number,
  image: String,
  description: String,
  showtimes: Array,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Movie = mongoose.model("Movie", moviesSchema);



module.exports = Movie;
