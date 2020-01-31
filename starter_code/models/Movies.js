const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  stars: {
    type: [String],
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  showtimes: {
    type: [String],
    required: true
  }
});

const MovieModel = mongoose.model("Movie", MovieSchema);

module.exports = MovieModel;
