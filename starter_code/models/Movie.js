const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const MovieSchema = new Schema({
  title: String,
  description: String,
  director: String,
  stars: Array,
  image: String,
  showtimes: Array
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Movie = mongoose.model("Nana", MovieSchema);

module.exports = Movie