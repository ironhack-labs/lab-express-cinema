//always starts with these two lines and ends with the last one
//file is always singular ie book not books

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    starts: Array,
    image: String,
    description: String,
    showtimes: Array
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;