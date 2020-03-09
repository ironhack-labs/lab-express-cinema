let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let movieSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});

let Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
