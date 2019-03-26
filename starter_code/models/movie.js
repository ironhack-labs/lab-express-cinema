 // Create the Movie model with the schema.
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// Create the movie schema 
const movieSchema = new Schema({
  title   : String,
  director: String,
  stars   : [String],
  image   : String,
  description: String,
  showtimes: [Schema.Types.Mixed]
});

const Movie = mongoose.model('Movie', movieSchema);

// Export the Celebrity model.
module.exports = Movie;