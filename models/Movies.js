const mongoose = require("mongoose");

const { Schema } = mongoose;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      director: String,
      description: String,
      stars: [String],
      showtimes: [String],
      image: String
});

const Movies = mongoose.model("movie", movieSchema);

module.exports = Movies;