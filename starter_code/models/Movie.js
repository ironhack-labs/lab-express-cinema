const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  // TODO: write the schema
  title:  {
    type: String,
  },
  director: {
    type: String,
  },
  stars: {
    type: Array
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  showtimes: {
    type: Array
  }
},
{ timestamps: true }
);

const Movies = mongoose.model('Movies', moviesSchema);
module.exports = Movies;