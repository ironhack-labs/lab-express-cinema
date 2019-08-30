const mongoose = require("mongoose");
const schema = mongoose.Schema;

const moviesSchema = new schema ({
  title: String,
  director: String, 
  stars :[String],
  image: String,
  description: String,
  showtimes: {
    type: [String],
    validator: (v) =>/\d{2}:\d{2}/.test(v)
  }
});

const MovieModel = mongoose.model("movie",moviesSchema);
module.exports = MovieModel;