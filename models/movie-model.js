const mongoose     = require('mongoose');
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
  }, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

// Compile the model Movie
const Movie = mongoose.model("Movie", movieSchema);

// Export the model
module.exports = Movie;
