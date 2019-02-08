let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let productSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
});
module.exports = mongoose.model('Movie', productSchema)
