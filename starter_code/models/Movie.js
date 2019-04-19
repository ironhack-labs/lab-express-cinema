const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, unique: true, required: true },
  director: { type: String, required: true },
  stars: [String],
  image: { type: String, required: true },
  description: String,
  showtimes: [String]
});

module.exports = mongoose.model('Movie', movieSchema);
