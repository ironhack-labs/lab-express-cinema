const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

// model function :
// arg 1 => collection name (in compass)
// agr 2 => Schema used for this data model
const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
