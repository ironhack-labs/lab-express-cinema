const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  director: {
    type: String,
    required: true,
  },

  stars: {
    type: [String],
    required: true,
  },

  image: {
    type: String,
    validate: {
      validator: (text) => {
        return text.startsWith("http");
      },
      message: "URL must start with HTTP or HTTPS",
    },
  },

  description: {
      type: String,
      required: true
  },

  showtimes: {
      type: [String]
  }


});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
