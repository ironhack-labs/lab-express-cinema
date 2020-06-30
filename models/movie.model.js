
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
 
const movieSchema = new Schema({
  title: String,
  description: String,
  director: String,
  stars: String,
  showtimes: Number, 
  image: String,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});
 
const Movie = mongoose.model("Movie", movieSchema);

 
module.exports = Movie;