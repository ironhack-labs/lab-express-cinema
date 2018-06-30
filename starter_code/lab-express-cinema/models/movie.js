const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//CREATE A NEW MONGO SCHEMA WITH MONGOOSE
const movieSchema = new Schema({
  title :String,
  director :String,
  stars : [String],
  image :String,
  description : String,
  showtimes:  [String]
});

//CREATE A NEW MONGOOSE MODEL USING THE SCHEMA CREATED BEFORE
let Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

