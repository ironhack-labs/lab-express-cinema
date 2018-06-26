const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema ({
  // document structure and rules definition here
  title: { type: String, required: true },
  description: { type: String, minlength: 8 },
  director: { type: String, required: true },
}, {
  // additional settings for schema here
  timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;