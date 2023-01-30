const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: "String", require: 'A title is required' },
  director: { type: "String", require: 'A director is required' },
  stars: [{ type: "String", require: 'A start is required' }],
  image: { type: "String", require: 'A image is required' },
  description: { type: "String", require: 'A description is required' },
  showtimes: [{ type: "String", require: 'A description is required' }],
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;