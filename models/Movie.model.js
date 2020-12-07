const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
  },
  director: {
    type: String,
  },
  stars: {
    type: [String],
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  showtimes: {
    type: [String],
  },
});

// below : user is the collection name (mongo will append to user => users)
const MovieModel = mongoose.model("movie", movieSchema);

module.exports = MovieModel; // is an object containing all usefull function for CRUD
